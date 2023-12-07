import React from 'react';
import { Component } from "react";
import { Link } from "react-router-dom";
//business entertainment general health science sports technology

export class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			current: "general"
		};
	}
	render() {
		return <div className='container-lg'>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand ms-2" href="/">Newsy</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Category
								</a>
								<ul className="dropdown-menu">
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "general" ? "active" : ""}`} aria-current="page" to="general" id='general' onClick={() => { this.setState({ current: "general" }) }}>General</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "business" ? "active" : ""}`} to="business" id='business' onClick={() => { this.setState({ current: "business" }) }}>Business</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "entertainment" ? "active" : ""}`} to="entertainment" id='entertainment' onClick={() => { this.setState({ current: "entertainment" }) }}>Entertainment</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "health" ? "active" : ""}`} to="health" id='health' onClick={() => { this.setState({ current: "health" }) }}>Health</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "science" ? "active" : ""}`} to="science" id='science' onClick={() => { this.setState({ current: "science" }) }}>Science</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "sports" ? "active" : ""}`} to="sports" id='sports' onClick={() => { this.setState({ current: "sports" }) }}>Sports</Link>
									</li>
									<li className="nav-item">
										<Link className={`nav-link ${this.state.current === "technology" ? "active" : ""}`} to="technology" id='technology' onClick={() => { this.setState({ current: "technology" }) }}>Technology</Link>
									</li>
								</ul>
							</li>


						</ul>
					</div>
				</div>
			</nav>

		</div>;
	}
}

export default NavBar;
