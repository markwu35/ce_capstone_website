import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import hyperloop2014 from './../../img/hyperloop2014.jpg';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'UCSB Hyperloop',
        category: 'Web Design',
        imgName: hyperloop2014,
        description: "description here"
      },
      {
        title: 'SPOT',
        category: 'Mobile Design',
        imgName: hyperloop2014,
        description: ""
      },
      {
        title: 'TiesaScope',
        category: 'Tool Design',
        imgName: hyperloop2014,
        description: "description here"
      },
      {
        title: 'SPOT',
        category: 'Mobile Design',
        imgName: hyperloop2014,
        description: "description here"
      },
      {
        title: 'TiesaScope',
        category: 'Tool Design',
        imgName: hyperloop2014,
        description: "description here"
      },
      {
        title: 'SPOT',
        category: 'Mobile Design',
        imgName: hyperloop2014,
        description: "description here"
      }
      ]})
  }

  render() {
		let projectItems;
		if(this.state.projects){
			projectItems = this.state.projects.map(project => {
				console.log(project);
				return (
					<ProjectItem key={project.title} project={project} />
				);
			});
		}
    return (
      <div className="Projects">
        <div className="row ProjectItem">
        {projectItems}
        </div>
      </div>
    );
  }
}

export default Projects;
