import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

    article = [
    ]
    constructor(props) {
        super();
        this.state = {
            article: this.article,
            loading: false,
            page: 1,
            totalPages: 1
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const { category } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a63dde34488448b80d57076f572b157&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ article: parsedData.articles, totalPages: (parsedData.totalResults) / (parsedData.articles.length), loading: false })
    }

    nextPage = async () => {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1a63dde34488448b80d57076f572b157&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ article: parsedData.articles, page: this.state.page + 1, loading: false });
    }

    prevPage = async () => {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1a63dde34488448b80d57076f572b157&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ article: parsedData.articles, page: this.state.page - 1, loading: false });
    }

    render() {
        return (
            <div>
                <div className="container text-center my-5">
                    <h2>TOP HEADLINES</h2>
                </div>
                {(this.state.loading && <Spinner />)}
                <div className="row my-3 ms-5">
                    {!this.state.loading && this.state.article.map((element) => {
                        let title = element.title.split(" ").slice(0, 45).join(" ");
                        return <div className="col-md-4 col-8 col-lg-3 my-3" key={element.url}>
                            <NewsItem heading={element.source.name} title={title}
                                desc={element.description ? element.description.split(" ").slice(0, 20).join(" ") : ""}
                                url={element.urlToImage} storyURL={element.url} />
                        </div>
                    })}
                </div>
                <div className="container">
                    <div>
                        <nav className="my-3" aria-label="Page navigation example">
                            <ul className="pagination justify-content-between">
                                <li className="page-item">
                                    <button disabled={this.state.page <= 1 ? "true" : ""} className="btn btn-m btn-dark" onClick={this.prevPage}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className="btn btn-m btn-dark" disabled={this.state.page >= this.state.totalPages ? "true" : ""} onClick={this.nextPage}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        );
    }
}

export default News;
