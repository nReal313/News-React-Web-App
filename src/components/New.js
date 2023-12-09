import React from 'react'
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function New(props) {

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    let { country, category } = useParams();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1a63dde34488448b80d57076f572b157&page=${page}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticle(parsedData.articles);
            setTotalPages(Math.ceil((parsedData.totalResults) / (parsedData.articles.length)));
            setLoading(false);
        }
        fetchData();
    }, [country, category, page])

    let nextPage = async () => {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a63dde34488448b80d57076f572b157&page=${page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(parsedData.articles);
        setPage(page + 1);
        setLoading(false);
    }

    let prevPage = async () => {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a63dde34488448b80d57076f572b157&page=${page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(parsedData.articles);
        setPage(page - 1);
        setLoading(false);
    }


    return (
        <div>
            <div className="container text-center my-5">
                <p className=" fs-1" style={{ fontFamily: "Times New Roman" }}>TOP HEADLINES</p>
            </div>
            {(loading && <Spinner />)}
            <div className="row my-3 ms-5">
                {!loading && article.map((element) => {
                    let title = element.title.split(" ").slice(0, 45).join(" ");
                    return <div className="col-md-4 col-12 col-lg-3 my-3" key={element.url}>
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
                                <button disabled={page <= 1 ? "true" : ""} className="btn btn-m btn-dark" onClick={prevPage}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="btn btn-m btn-dark" disabled={page >= totalPages ? "true" : ""} onClick={nextPage}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}
