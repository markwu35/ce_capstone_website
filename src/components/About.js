import React from 'react';

//import img
import header from './../img/header.jpg';
import hyperloop2014 from './../img/hyperloop2014.jpg';
import about2 from './../img/about2.jpg';
import about3 from './../img/about3.jpg';
import about4 from './../img/about4.jpg';
import EA from './../img/EmbeddedArtists.gif';
import laritech from './../img/Laritech-logo.png';
import mentorGraphics from './../img/mentor-hr.gif';
import nxp from './../img/nxp-logo.png';
import rp from './../img/rapidprototypes.gif';
import sunstone from './../img/topSunstone.png';
import "./About.css";

const About = () => (
	<div>
    <div>
      <img  className="header-img" src={header} />
    </div>
    <div className="course_section">
			<h3>Course Spotlight</h3>
			<div className="row">
	      <div className="col m4"><img className="about-image" src={hyperloop2014} /></div>
	      <div className="col m8">
	      	<p>ECE 189A & B is a year-long senior capstone project in which students, working in small groups of three to five, design and implement an embedded computer system incorporating both significant hardware and software components and, in many cases, mechanical components as well.</p>
	      </div>
			</div>
			<div className="row">
	      <div className="col m8">
					<p>During the first half of this course sequence, student groups choose a project, define and refine a description of its external behavior, then launch into the hardware design phase. By the end of fall quarter, using industry standard Computer Aided Design tools, they have produced detailed hardware schematics, fabrication-ready printed circuit board artwork, and complete component kits and associated documentation necessary for prototype assembly.  An organized project notebook describing all aspects of the project as well as formal design reviews/presentations and the use of professional project management software complete the initial portion of the capstone design experience.</p>
	      </div>
	      <div className="col m4"><img className="about-image" src={about2} /></div>
			</div>
			<div className="row">
	      <div className="col m4"><img className="about-image" src={about3} /></div>
	      <div className="col m8">
	      	<p>During winter quarter, the ECE department has the printed circuit boards fabricated and assembled and, when students return for the second half of the capstone project course, the focus turns toward overall project integration.  On the first day of spring quarter, circuit boards are ready for initial power up, design debug and verification. In parallel, creation of the project software begins and any mechanical components are acquired and/or manufactured and assembled.  Once the hardware design is validated and the software and mechanical development efforts are completed, the final project prototype is integrated, tested and verified.  A succession of milestones, reviews and presentations ensures that project completion and introduction occur in a timely and successful manner.</p>
	      </div>
			</div>
			<div className="row">
	      <div className="col m8">
	      	<p>At the end of spring quarter, each project team participates in the Computer Engineering portion of the Senior Capstone Project Presentation Day.  During the day long event, the groups display posters highlighting their projects’ features and operation in the department’s courtyard and conduct a public presentation and demonstration of the completed projects.</p>
	      </div>
	      <div className="col m4"><img className="about-image" src={about4} /></div>
			</div>
		</div>
		<div className="course_section">
			<h3>Sponsors</h3>
			<div className="row">
				<div className="col s6"><a target="_blank" href="https://mentor.com">
					<img className="sponsor-img" src={mentorGraphics} />
				</a></div>
				<div className="col s6"><a target="_blank" href="https://nxp.com">
					<img className="sponsor-img" src={nxp} />
				</a></div>
			</div>
			<div className="row">
				<div className="col s6"><a target="_blank" href="https://embeddedartists.com">
					<img className="sponsor-img" src={EA} />
				</a></div>
				<div className="col s6"><a target="_blank" href="https://sunstone.com">
					<img className="sponsor-img" src={sunstone} />
				</a></div>
			</div>
			<div className="row">
				<div className="col s6"><a target="_blank" href="https://rprototypes.com">
					<img className="sponsor-img" src={rp} />
				</a></div>
				<div className="col s6"><a target="_blank" href="https://laritech.com">
					<img className="sponsor-img" src={laritech} />
				</a></div>
			</div>
		</div>

	</div>
)

export default About;
