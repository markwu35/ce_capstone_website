import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

import hyperloopii from './../../img/hyperloopii.PNG';
import flir from './../../img/flir.PNG';
import gestur from './../../img/gestur.PNG';
import ir_hub from './../../img/ir_hub.PNG';
import ostracam from './../../img/ostracam.PNG';
import sonos from './../../img/sonos.PNG';

import spot from './../../img/spot.PNG';
import tersiascope from './../../img/tersiascope.PNG';
import deepvision from './../../img/deepvision.PNG';
import walle from './../../img/walle.PNG';
import hyperloop17 from './../../img/hyperloop2017.PNG';
import gauchohawk from './../../img/gauchohawk.PNG';
import hoverhand from './../../img/hoverhand.PNG';

import './Projects.css';

class Projects17_18 extends Component {
  constructor() {
    super();
    this.state = {
      project: []
    }
  }

  componentWillMount(){
    this.setState({project: [
      {
        title: 'SPOT',
        projectId: 6,
        imgName: spot,
        members: ["Bryan Lavin-Parmenter",
        "Brandon Pon",
        "Neil O’Bryan",
        "Saurabh Gupta"],
        description: ["In planetary exploration spacewalks, astronauts explore planetary surfaces (i.e. Mars) on foot and on rovers. In the case of surface extravehicular activities, astronauts will traverse previously unexplored terrain. Astronauts need a device that will help them path-find on unknown terrain, guiding them away from dangerous areas yet towards important scientific locations without an increase in cognitive load. We conduct a cost-benefit evaluation identifying the various path-finding methods that could be given to astronauts conducting space expeditions, be it visual, touch, and/or auditory cues. We also develop a device that will allow the astronauts to “mark” areas of interest or danger, and then have that information distributed to a home base and every other device, so every active astronaut knows what the other astronauts have marked at any given point in time. The device is a potential solution using the modality(ies) of our choosing (e.g. garment, screen, speaker), with a full usability assessment of the prototype."
        ]
      },
      {
        title: 'TersiaScope',
        projectId: 7,
        imgName: tersiascope,
        members: ["Ryan Kaveh",
        "Kyle Carson",
        "Jon Young"],
        description: ["TiresiaScope’s main objective is to produce a headset for the blind, which will use ranging sensors to detect nearby objects around the user, and a surround-sound system to pinpoint the object’s locations to the user. Potentially, the headset will also feature a camera system connected by WiFi to a server to recognize and read aloud nearby signs.",
        "A 360-degree array of ranging sensors will identify distances to nearby objects. Multiple sensor types, such as ultrasonic and infrared, will provide better coverage. The processor will map these nearby objects, and translate the map into binaural sound information. This sound information will identify direction using simulated surround-sound and distance using scaling musical notes. This information will be sent to the headphones."]
      },
      {
        title: 'Deep Vision',
        projectId: 8,
        imgName: deepvision,
        members: ["Yang Ren",
        "Tristan Seroff",
        "Asitha Kaduwela",
        "Jesus Diera"],
        description: ["One popular technology used on many drones is tracking, which tracks a certain target in real time by analyzing the video recorded by the drone’s camera. However, tracking under many different situations is difficult because of the various actions that the target could take and the possibilities of the target being blocked. Deep Vison aimed to implement an algorithm on embedded system that features neural networks based target tracking for drones.  Using Machine leaning and neural networks with computer vision, computer algorithm implemented on embedded systems can constantly learn from the dataset, and then achieve high accuracy tracking to solve this problem.",
        "The designed system will join the 2018 DAC System Design Contest. Our team will use the training dataset provided by the industry sponsor DJI to develop a object tracking algorithm based on neural networks and deep learning. The design will then be evaluated by a hidden dataset in terms of processing speed, tracking accuracy and power consumption in the contest. After the algorithm is done, our team also aim to implement the algorithm on the embedded system to communicate with the drone in real time."]
      },
      {
        title: 'Wall-E',
        projectId: 9,
        imgName: walle,
        members: ["Nathan Bradley",
        "Jesus Castro",
        "Jeremiah Prousalis"],
        description: ["There is currently no effective way to quantify courtship patterns among ostracods (tiny crustaceans that produce luminous courtship displays throughout the Caribbean). Waterborne Autonomous Low Light Electrostereovideography (WALL-E), is a submersible low-light camera that can be deployed in tandem to analyze these courtship patterns using computer vision techniques.",
        "revious teams of CE capstone have already designed a WALL-E prototype that was able to record useful video in the seas. Our goal is to extend this prototype to include additional functionality. Some options include:  'adding on-board clock for video timestamp support' , 'adding GPS (attachable float and antennae) to get location data', 'improving camera stability for video capture', 'creating a tethering mechanism', 'adding environmental monitoring functionality', 'using a PMT (photomultiplier tube) to record absolute light levels', and 'synchronizing dual camera video frames'"]
      },
      {
        title: 'Gaucho Hawk',
        projectId: 10,
        imgName: gauchohawk,
        members: ["Paul Killam",
        "Christina Lim",
        "Oliver Thio"],
        description: ["The project goal is to expand upon the capability of the PixHawk by adding functionality for inertial guidance, state estimation, a direct high-speed data transfer interface, accurate GPS reference, and a precise time source for time-stamping data whenever GPS is unavailable. This will be achieved through the development of a “shield” daughterboard which will interface with the STM Nucleo processor pins and all newly added systems. In addition, to deploy the PX4 autopilot on the board, we will port the NuttX operating system onto the board."]
      },
      {
        title: 'Hover Hand',
        projectId: 11,
        imgName: hoverhand,
        members: ["Brian Sandler",
        "Brenden Fujishige",
        "Marcellis Carr-Barfield",
        "Seyed Mohammad Ghazitabrizi",
        "Richard Wei",
        "Subhodeep Choudhury"
        ],
        description: "The UCSB Hover Hand Team’s goal is to allow control of a quadcopter drone with the hand. Recording of the hand may result in a more intuitive and precise method of control over the common RC controller. The glove shall act as the transmitter to the drone’s receiver, relaying the chief flight controls. Recording hand movement in a way that allows the position and orientation to be accurately and meaningfully described is another important aspect to the glove’s operation. There are 6 key methods of motion control in a quadcopter’s flight: Forward/back, left/right, pitch (forward/back rotation), roll (left/right rotation), throttle, and yaw (horizontal rotation). These 6 types of movement must be mapped as hand movements or gestures in such a way that allows seamless control of the quadcopter. In  order to model hand movements and gestures, sensors must be placed on the fingers and on the top of the hand."
      },
      {
        title: 'Hyperloop III',
        projectId: 12,
        imgName: hyperloop17,
        members: ["Paul Killam",
        "Christina Lim",
        "Oliver Thio"],
        description: "The hyperloop is a proposed advanced method of high-speed transportation between cities that are less than about 900 miles apart (e.g. Los Angeles and San Francisco). The system uses a capsule that is propelled through a low-pressure steel tube as it rests on frictionless air bearings or magnets. The Embedded Systems Team monitors the UCSB Hyperloop Pod’s physical metrics through an accurate sensor network and operates mechanical systems utilizing a web application and various actuators."
      }
      ]})
  }

  render() {
		let projectItems;
		if(this.state.project){
			projectItems = this.state.project.map(project => {
				//console.log(project);
				return (
					<ProjectItem key={project.title} project={project} />
				);
			});
		}
    return (
      <div className="project">
        <h5>2017-2018</h5>
        <dl className="row">
          <dt className="col s6">Instructors:</dt>
          <dd className="col s6">Dr. Yogananda Isukapalli <a target="_blank" href="http://www.ece.ucsb.edu/~yoga/"><i className="fa fa-globe" aria-hidden="true"></i></a> | <a href="mailto:yoga@ucsb.edu"><i className="fa fa-envelope" aria-hidden="true"></i></a></dd>
        </dl>
        <div className="row ProjectItem">
        {projectItems}
        </div>
      </div>
    );
  }
}

export default Projects17_18;
