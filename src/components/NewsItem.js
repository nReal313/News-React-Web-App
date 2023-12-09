import React, { Component } from 'react'
import random from ".././random.jpg"

export class NewsItem extends Component {
    render() {
        let { heading, title, desc, url, storyURL } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem", height: "30rem" }}>
                    <div className="card-header">
                        <strong>{heading}</strong>
                    </div>
                    <img src={url ? url : random} className="card-img-top" alt="..." style={{ objectFit: 'cover', maxHeight: "150px", height: "150px" }} />
                    <div className="card-body" style={{ height: "20rem" }}>
                        <h6 className="card-title"><strong>{title}</strong></h6>
                        <p className="card-text ">{desc}...</p>
                    </div>
                    <a href={storyURL} className="btn btn-primary" target="_blank" rel="noreferrer">Check Out</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
