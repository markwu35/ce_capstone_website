import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import hyperloopii from './../../img/hyperloopii.PNG';
import flir from './../../img/flir.PNG';
import gestur from './../../img/gestur.PNG';
import ir_hub from './../../img/ir_hub.PNG';
import ostracam from './../../img/ostracam.PNG';
import sonos from './../../img/sonos.PNG';

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
        imgName: flir,
        members: ["Bryan Lavin-Parmenter",
        "Brandon Pon",
        "Neil O’Bryan",
        "Saurabh Gupta"],
        description: ["In planetary exploration spacewalks, astronauts explore planetary surfaces (i.e. Mars) on foot and on rovers. In the case of surface extravehicular activities, astronauts will traverse previously unexplored terrain. Astronauts need a device that will help them path-find on unknown terrain, guiding them away from dangerous areas yet towards important scientific locations without an increase in cognitive load. We conduct a cost-benefit evaluation identifying the various path-finding methods that could be given to astronauts conducting space expeditions, be it visual, touch, and/or auditory cues. We also develop a device that will allow the astronauts to “mark” areas of interest or danger, and then have that information distributed to a home base and every other device, so every active astronaut knows what the other astronauts have marked at any given point in time. The device is a potential solution using the modality(ies) of our choosing (e.g. garment, screen, speaker), with a full usability assessment of the prototype."
        ]
      },
      {
        title: 'TersiaScope',
        imgName: gestur,
        members: ["Ryan Kaveh",
        "Kyle Carson",
        "Jon Young"],
        description: ""
      },
      {
        title: 'Deep Vision',
        imgName: hyperloopii,
        members: ["Yang Ren",
        "Tristan Seroff",
        "Asitha Kaduwela",
        "Jesus Diera"],
        description: "description here"
      },
      {
        title: 'Wall-E',
        imgName: ir_hub,
        members: ["Nathan Bradley",
        "Jesus Castro",
        "Jeremiah Prousalis"],
        description: "description here"
      },
      {
        title: 'Gaucho Hawk',
        imgName: ostracam,
        members: ["Paul Killam",
        "Christina Lim",
        "Oliver Thio"],
        description: "description here"
      },
      {
        title: 'Hover Hand',
        imgName: sonos,
        members: ["Brian Sandler",
        "Brenden Fujishige",
        "Marcellis Carr-Barfield",
        "Seyed Mohammad Ghazitabrizi",
        "Richard Wei",
        "Subhodeep Choudhury"
        ],
        description: "description here"
      },
      {
        title: 'Hyperloop III',
        imgName: ostracam,
        members: ["Paul Killam",
        "Christina Lim",
        "Oliver Thio"],
        description: "description here"
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
