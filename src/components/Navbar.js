import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import logo from './../img/logo.png';

class Navbar extends Component {
  render() {
    return (
    	<div>
	    	<ul id="dropdown1" className="dropdown-content">
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone17-album/index.html">16-17</a></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone16-album/index.html">15-16</a></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone15-album/index.html">14-15</a></li>
				</ul>
	    	<ul id="dropdown2" className="dropdown-content">
				  <li><Link to="/Projects17_18">17-18</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/Projects16_17">16-17</Link></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/event-2016/">15-16</a></li>
				</ul>
				<ul id="dropdown3" className="dropdown-content">
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone17-album/index.html">16-17</a></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone16-album/index.html">15-16</a></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/capstone15-album/index.html">14-15</a></li>
				</ul>
	    	<ul id="dropdown4" className="dropdown-content">
				  <li><Link to="/Projects17_18">17-18</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/Projects16_17">16-17</Link></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/event-2016/">15-16</a></li>
				</ul>
			  <nav className="nav-extended">
			    <div className="nav-wrapper">
			      <a href="http://www.ece.ucsb.edu/" className="brand-logo black-text"><img className="nav-logo" src={logo} /></a>
			      <a href="#" data-activates="mobile-demo" className="button-collapse black-text"><i className="fa fa-bars"></i></a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
		      		<li><a href="/" className="black-text">Home</a></li>
		      		<li><Link to="/schedule" className="black-text">Schedule</Link></li>
		      		<li><a className="dropdown-button black-text" data-activates="dropdown1">Album<i className="fa fa-caret-down"></i></a></li>
		      		<li><a className="dropdown-button black-text" data-activates="dropdown2">Projects<i className="fa fa-caret-down"></i></a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
		      		<li><a href="/" className="black-text">Home</a></li>
		      		<li><Link to="/schedule" className="black-text">Schedule</Link></li>
		      		<li><a className="dropdown-button black-text" data-activates="dropdown3">Album<i className="fa fa-caret-down"></i></a></li>
	      			<li><a className="dropdown-button black-text" data-activates="dropdown4">Projects<i className="fa fa-caret-down"></i></a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
    );
  }
}

export default Navbar;
