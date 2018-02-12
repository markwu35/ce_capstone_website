import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import logo from './../img/logo.png';

class Navbar extends Component {
  render() {
    return (
    	<div>
	    	<ul id="dropdown1" className="dropdown-content">
				  <li><Link to="/Projects17_18">17-18</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/Projects16_17">16-17</Link></li>
				  <li className="divider"></li>
				  <li><a href="http://www.ce.ucsb.edu/undergrad/sr-projects/event-2016/">15-16</a></li>
				</ul>
	    	<ul id="dropdown2" className="dropdown-content">
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
		      		<li><Link to="/" className="black-text">Home</Link></li>
		      		<li><Link to="/schedule" className="black-text">Schedule</Link></li>
		      		<li><a className="dropdown-button black-text" data-activates="dropdown1">Projects<i className="fa fa-caret-down"></i></a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
		      		<li><Link to="/" className="black-text">Home</Link></li>
		      		<li><Link to="/schedule" className="black-text">Schedule</Link></li>
	      			<li><a className="dropdown-button black-text" data-activates="dropdown2">Projects<i className="fa fa-caret-down"></i></a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
    );
  }
}

export default Navbar;
