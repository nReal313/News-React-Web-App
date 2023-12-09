import React from 'react';
import { Component } from "react";
import { Link } from "react-router-dom";
import Data from "../data_json.json";
import "./custom.css"
//Business Entertainment General Health Science Sports Technology

export class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			category: "General",
			country: "US",
			Search: ""
		};
	}
	render() {
		let cats = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
		const keyChangeUp = (event) => {
			let val = event.target.value;
			this.setState({ Search: val });
			//console.log(this.state.Search);
		}
		let filterFunction = () => {
			let val = this.state.Search;
			let valu = val.toLowerCase();
			let linked = document.getElementById("countrySearch").getElementsByTagName("li");
			// console.log(linked[0].textContent);
			// Array(linked).forEach(e => {
			// });
			for (var i = 0; i < linked.length; i++) {
				if (linked[i].innerText.toLowerCase().indexOf(valu) > -1) {
					linked[i].style.display = "";
				}
				else {
					linked[i].style.display = "none";
				}
			}
		}
		let finalChanges = () => {
			let linked = document.getElementById("countrySearch").getElementsByTagName("li");
			this.setState({ Search: "" })
			for (var i = 0; i < linked.length; i++) {
				linked[i].style.display = "";
			}
		}
		return <div className='container-lg'>
			<nav className="navbar navbar-expand-lg bg-dark border rounded">
				<div className="container-lg text-md-center">
					<Link className="navbar-brand ms-2" to="/US/General">
						<div className="fs-3 ms-3" style={{ fontFamily: "gill sans, sans-serif", color: "white" }}>Newsy</div>
					</Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown" >
								<a className="nav-link active dropdown-toggle" style={{ color: "white" }} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									{this.state.country}
								</a>
								<ul className="dropdown-menu" id="countrySearch">
									<input class="border rounded p-1 m-1" id='mySearch' type='text' placeholder='Country' value={this.state.Search} onChange={keyChangeUp} onKeyUp={filterFunction} />
									{Data.map((element) => {
										return <li className="nav-item">
											<Link className={`nav-link ${this.state.country === element.Code ? "active" : ""}`} to={`${element.Code}/${this.state.category}`} id={element.Code} onClick={() => {
												this.setState({ country: element.Code });
												finalChanges();
											}}>{element.Name}</Link>
										</li>
									}
									)
									}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link active dropdown-toggle" href="/" style={{ color: "white" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									{this.state.category}
								</a>
								<ul className="dropdown-menu">
									{
										cats.map((element) => {
											return <li className="nav-item">
												<Link className={`nav-link ${this.state.category === element ? "active" : ""}`} to={`${this.state.country}/${element}`} id={element} onClick={() => { this.setState({ category: element }) }}>{element}</Link>
											</li>
										})
									}
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
