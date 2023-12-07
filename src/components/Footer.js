import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="my-3" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous" onClick={() => { this.props.prevPage(); }}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next" onClick={() => { this.props.nextPage(); }}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Footer
