import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import hyperloopii from './../../img/hyperloopii.PNG';
import flir from './../../img/flir.PNG';
import gestur from './../../img/gestur.PNG';
import ir_hub from './../../img/ir_hub.PNG';
import ostracam from './../../img/ostracam.PNG';
import sonos from './../../img/sonos.PNG';

import './Projects.css';

 
class Projects16_17 extends Component {
  constructor() {
    super();
    this.state = {
      project: []
    }
  }

  componentWillMount(){
    this.setState({project: [
      {
        title: 'FLIR Helios',
        projectId: 0,
        imgName: flir,
        members: ["Ben May, ",
        "Carlos Beltran, ",
        "Salim Benhaddou, ",
        "Garrison Carter, ",
        "Aaron Chang"],
        description: ["All security cameras that dominate the market have wires. Due to the need for cable routing, installation costs make security systems too expensive for most consumers.  However, current cableless options, such as the EyeTrax Ranger system, cost upwards of $2,000, not including monthly cellular data connection fees. The FLIR Helios is a cableless low-cost alternative to these security cameras. The Helios system integrates solar power and WiFi capabilities to remove nearly all cabling.",
        "This is a UCSB College of Engineering multidisciplinary project encompassing the Computer Engineering, Electrical Engineering and Mechanical Engineering capstone classes and is sponsored by FLIR."
        ]
      },
      {
        title: 'Gestur',
        projectId: 1,
        imgName: gestur,
        members: ["Ryan Kaveh, ",
        "Kyle Carson, ",
        "Jon Young"],
        description: ["With the releases of the Oculus Rift, HTC Vive, Microsoft Hololens, and Google Daydream, virtual reality is rapidly evolving from an awkward, emerging concept into an industry in and of itself.  Unfortunately, existing hardware peripherals for VR lack key features needed to fully leverage what these environments have to offer.  Namely, they still rely on physical designs derived from traditional-style video game controllers.  Rather than this, we believe the future for interacting with virtual environments lies in e-wearables; clothing with integrated electronics.  Our project, Gestur, aims to meet this vision by providing a glove-based controller for VR platforms as an alternative to more “standard” controllers."
        ]
      },
      {
        title: 'Hyperloop II',
        projectId: 2,
        imgName: hyperloopii,
        members: ["Yang Ren, ",
        "Tristan Seroff, ",
        "Asitha Kaduwela, ",
        "Jesus Diera"],
        description: ["UCSB Hyperloop is an interdisciplinary team of 32 students and professors competing in SpaceX's Hyperloop Pod Competition.  Their Pod is a vehicle designed to travel through a vacuum tunnel at high speeds, and is to be tested on a track constructed at SpaceX's Hawthorne headquarters in August 2017.  The Pod's payload levitates with the use of four magnetic levitation engines to reduce the vehicle's drag.",
        "As members of the Sensors and Controls sub-team, Computer Engineers have been responsible for choosing and interfacing to the sensors which monitor the Pod’s critical subsystems, as well as developing and implementing control schemes for those subsystems, and reporting telemetry data back to a companion web application.  Each subsystem requires various control signals and needs to be monitored to ensure that safe and ideal behavior is achieved.",
        "This is a UCSB College of Engineering multidisciplinary project encompassing the Computer Engineering, Electrical Engineering and Mechanical Engineering capstone classes."
        ]
      },
      {
        title: 'IR Hub',
        projectId: 3,
        imgName: ir_hub,
        members: ["Nathan Bradley, ",
        "Jesus Castro, ",
        "Jeremiah Prousalis"],
        description: ["IR Hub was created to solve a problem each member of the IR Hub team faced in their own home. The problem: too many infrared remotes cluttering the living room. The solution: a device that turns your smartphone into a universal remote by combining three systems. Simply leave IR Hub in a central location of a room, and take control of devices in that room with your phone."
        ]
      },
      {
        title: 'OstraCam 2',
        projectId: 4,
        imgName: ostracam,
        members: ["Paul Killam, ",
        "Christina Lim, ",
        "Oliver Thio"],
        description: ["OstraCam's intended purpose is to assist Dr. Todd Oakley and his team in researching ostracod, a bioluminescent crustacean.  It will do so by tracking the bioluminescent displays in 3D at 30 FPS using a submergible stereo camera system.  As the second year of the OstraCam project, we will primarily improve upon the computer vision aspects of this project, primarily centered around improving the quality of data from the camera system and analyzing it.  Hardware upgrades such as a new microcontroller and new instrumentation were planned, but will be delayed to next year.",
        "This is a collaboration between the Computer Engineering capstone class and Professor Todd Oakley, UCSB Department of Ecology, Evolution and Marine Biology (the project sponsor)."
        ]
      },
      {
        title: 'SONOS COM.',
        projectId: 5,
        imgName: sonos,
        members: ["Brian Sandler, ",
        "Brenden Fujishige, ",
        "Marcellis Carr-Barfield, ",
        "Seyed Mohammad Ghazitabrizi, ",
        "Richard Wei, ",
        "Subhodeep Choudhury"
        ],
        description: ["This is an intercom device that lets you broadcast your voice to any Sonos wireless sound system in your home. This multidisciplinary project consists of students from three disciplines.",
        "The mechanical engineering team focuses on designing and building the physical enclosure to be sleek, compact, and provide acceptable device thermal operating conditions.",
        "The electrical engineering team crafts the human-device interaction experience by working on capacitive touch and dual-microphone input, as well as all digital signal processing of audio.",
        " The computer engineering team designs the hardware (assembled by Laritech) and software to provide the desired functionality, working closely with the electrical engineers to capture audio and with the mechanical engineers so that the enclosure and PCB come together in harmony.",
        "This is a UCSB College of Engineering multidisciplinary project encompassing the Computer Engineering, Electrical Engineering and Mechanical Engineering capstone classes and is sponsored by SONOS."
        ]
      }
      ]})
  }

  render() {
		let projectItems;
		if(this.state.project){
			projectItems = this.state.project.map(project => {
				//console.log(project);
				return (
					<ProjectItem key={project.title} project={project} projectId={project.projectId}/>
				);
			});
		}
    return (
      <div className="project">
        <h5>2016-2017</h5>
        <dl className="row">
          <dt className="col s6">Instructors:</dt>
          <dd className="col s6">Dr. John M. Johnson <a target="_blank" href="http://www.ece.ucsb.edu/Faculty/Johnson"><i className="fa fa-globe" aria-hidden="true"></i></a> | <a href="mailto:johnson@ece.ucsb.edu"><i className="fa fa-envelope" aria-hidden="true"></i></a></dd>
        </dl>
        <dl className="row">
          <dd className="col s6 offset-s6">Dr. Yogananda Isukapalli <a target="_blank" href="http://www.ece.ucsb.edu/~yoga/"><i className="fa fa-globe" aria-hidden="true"></i></a> | <a href="mailto:yoga@ucsb.edu"><i className="fa fa-envelope" aria-hidden="true"></i></a></dd>
        </dl>
        <div className="row ProjectItem">
        {projectItems}
        </div>
      </div>
    );
  }
}

export default Projects16_17;
