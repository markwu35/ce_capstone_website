import React from 'react';
import "./Schedule.css";

const Schedule = () => (
	<div id="course_milestone">
		<h5>Course Milestone</h5>
		<div className="inline-grid">
		<h6>Fall Quarter</h6>
		<ul className="timeline">
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Monday, October 3</div>
		    <div className="tl-content">
		    	<h5>Project Idea and Team Formation</h5>
		      <p>List of team members, conceptual drawing and brief overview "datasheet" of the project with preliminary block diagram.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Monday, October 10</div>
		    <div className="tl-content">
		    	<h5>Refined Project</h5>
		      <p>Annotated block diagram, external behavioral specification and identification of the role to be played by each team member.</p>
		     </div>
		  </li>
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Monday, October 24</div>
		    <div className="tl-content">
		    	<h5>System-level Design</h5>
		      <p>Subsystem requirements & specifications, and interface specs.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Monday, November 21</div>
		    <div className="tl-content">
		    	<h5>Detailed Design</h5>
		      <p>Schematic drawings, and (if programmable logic is being used) Verilog or VHDL sources with both functional and timing simulations.</p>
		     </div>
		  </li>  
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, December 9</div>
		    <div className="tl-content">
		    	<h5>Implementation of the Hardware Design</h5>
		      <p>Artwork for fabricating the printed circuit board (PCB), including Gerber plots, final schematics, engineering drawing, assembly drawing.</p>
		     </div>
		  </li> 
		</ul>
		</div>
		<div className="inline-grid">
		<h6>Winter Quarter</h6>
		<ul className="timeline">
		  <li className="tl-item margin_bottom">
		    <div className="tl-icon"></div>
		    <div className="tl-time"></div>
		    <div className="tl-content">
		    	<h5>PCB Fabrication & Assembly</h5>
		      <p>Final review of printed circuit board artwork; generation and submittal of Gerber files to Sunstone Circuits.  Final procurement of components for PCB's, creation of complete assembly kits and submittal to Rapid Prototypes.</p>
		      <p>All dates are approximations with Friday, March 25 the "drop dead" date for delivery of assembled PCB's to begin ECE 189B in spring quarter.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, January 27</div>
		    <div className="tl-content">
		      <p>Final review and submittal of Printed Circuit Board artwork.</p>
		     </div>
		  </li>
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, February 10</div>
		    <div className="tl-content">
		      <p>Printed Circuit Board fabrication.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Monday, February 13</div>
		    <div className="tl-content">
		      <p>Final Assembly Kit: bagged parts, assembly drawing and Bill of Materials.</p>
		     </div>
		  </li>  
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, March 17</div>
		    <div className="tl-content">
		      <p>PCB assembly.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, March 31</div>
		    <div className="tl-content">
		      <p>PCB worst case completion date to begin Spring quarter.</p>
		     </div>
		  </li> 
		</ul>	
		</div>
		<div className="inline-grid">
		<h6>Spring Quarter</h6>
		<ul className="timeline">
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, April 7</div>
		    <div className="tl-content">
		    	<h5>Initial Power-Up</h5>
		      <p>Apply power to board with no shorts, correct regulated voltages, currents within spec, etc.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, April 14</div>
		    <div className="tl-content">
		    	<h5>Processor / Memory / Boot-up</h5>
		      <p>Demonstrate execution of user code via the “Hello World” program, flashing LED’s, etc.</p>
		     </div>
		  </li>
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, April 21</div>
		    <div className="tl-content">
		    	<h5>BIOS-Level Monitor</h5>
		      <p>main() with infinite loop; polling / interrupt structure of peripheral control demonstrated.</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, May 5</div>
		    <div className="tl-content">
		    	<h5>Individual Subsystem Tests</h5>
		      <p>Independent software control of all sensors, motors, wireless, displays, etc.</p>
		     </div>
		  </li>  
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, May 19</div>
		    <div className="tl-content">
		    	<h5>Integration of Subsystems</h5>
		      <p>All systems exercised and communicating through common main().</p>
		     </div>
		  </li>
		  <li className="tl-item tl-right">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Friday, June 2</div>
		    <div className="tl-content">
		    	<h5>Full Application</h5>
		      <p>Final integration of “Controls Indicators & Interconnect” and full system operation.</p>
		     </div>
		  </li>
		  <li className="tl-item">
		    <div className="tl-icon"></div>
		    <div className="tl-time">Thursday, June 8</div>
		    <div className="tl-content">
		    	<h5>Manual, Poster & Presentation</h5>
		      <p>Capstone Project Presentation Day.</p>
		     </div>
		  </li>
		</ul>	
		</div>
	</div>
)

export default Schedule;
