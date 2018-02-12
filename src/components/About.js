import React, { Component } from 'react';

//import SimpleSlider from './SimpleSlider';

//import img
import header from './../img/header.jpg';
import hyperloop2014 from './../img/hyperloop2014.jpg';
import EA from './../img/EmbeddedArtists.gif';
import laritech from './../img/Laritech-logo.png';
import mentorGraphics from './../img/mentor-hr.gif';
import nxp from './../img/nxp-logo.png';
import rp from './../img/rapidprototypes.gif';
import sunstone from './../img/topSunstone.png';
import nasa from './../img/nasa.png';
import dji from './../img/dji.png';
import nvidia from './../img/nvidia.png';
import av from './../img/av.png';
import at from './../img/ai.png';

import flir_carousel from './../img/flir_carousel.PNG';
import hyperloop_carousel from './../img/hyperloop_carousel.jpg';
import ir_hub_carousel from './../img/ir_hub_carousel.PNG';

import "./About.css";

class About extends Component {
	componentWillMount(){

	}

	render() {
		return (
		<div>
	  	<div className="carousel carousel-slider center" data-indicators="true">
		    <div className="carousel-item red white-text" href="#one!">
		      <img src={hyperloop_carousel} />
		    </div>
		    <div className="carousel-item amber white-text" href="#two!">
		      <img src={flir_carousel} />
		    </div>
		    <div className="carousel-item green white-text" href="#three!">
		      <img src={ir_hub_carousel} />
		    </div>
		    <div className="carousel-item blue white-text" href="#four!">
		      <img src={header} />
		    </div>
		  </div>
	    <div className="course_section">
				<h5>Course Spotlight</h5>
				<div className="row">
		      <div className="col m4"><img className="about-image" src={hyperloop2014} /></div>
		      <div className="col m8">
		      	<p>ECE 189A/B/C is a year-long senior capstone project in which Computer Engineering(CE)  students, working in small groups of four to six, design and implement an embedded computer system incorporating both significant hardware and software components and, in some cases, mechanical components as well. CE capstone projects fall into several categories: (i) Student defined projects, in which students come up with the design idea on their own, most of the CE projects tend to fall in this category; (ii) Industry sponsored projects, in which an industry partner specifies a design challenge of interest to their organization; (iii) Research group projects, in which a research group at UCSB poses a design challenge; (iv) Student project competitions.</p>
		      </div>
				</div>
			</div>
			<div className="course_section">
				<h5>Sponsors</h5>
				<div className="row">
					<div className="col m6"><a target="_blank" href="https://mentor.com">
						<img className="sponsor-img" src={mentorGraphics} />
					</a></div>
					<div className="col m6"><a target="_blank" href="https://nxp.com">
						<img className="sponsor-img" src={nxp} />
					</a></div>
				</div>
				<div className="row">
					<div className="col m6"><a target="_blank" href="https://embeddedartists.com">
						<img className="sponsor-img" src={EA} />
					</a></div>
					<div className="col m6"><a target="_blank" href="https://sunstone.com">
						<img className="sponsor-img" src={sunstone} />
					</a></div>
				</div>
				<div className="row">
					<div className="col m6"><a target="_blank" href="https://rprototypes.com">
						<img className="sponsor-img" src={rp} />
					</a></div>
					<div className="col m6"><a target="_blank" href="https://laritech.com">
						<img className="sponsor-img" src={laritech} />
					</a></div>
				</div>

				<div className="row">
					<div className="col m6"><a target="_blank" href="https://www.nasa.gov">
						<img className="sponsor-img" src={nasa} />
					</a></div>
					<div className="col m6"><a target="_blank" href="https://www.dji.com">
						<img className="sponsor-img" src={dji} />
					</a></div>
				</div>
				<div className="row">
					<div className="col m6"><a target="_blank" href="https://www.nvidia.com/page/home.html">
						<img className="sponsor-img" src={nvidia} />
					</a></div>
					<div className="col m6"><a target="_blank" href="https://www.avinc.com">
						<img className="sponsor-img" src={av} />
					</a></div>
				</div>
				<div className="row">
					<div className="col m6"><a target="_blank" href="https://www.arvengtechnologies.com">
						<img className="sponsor-img" src={at} />
					</a></div>
				</div>

			</div>

		</div>
		);
	}
}

export default About;
