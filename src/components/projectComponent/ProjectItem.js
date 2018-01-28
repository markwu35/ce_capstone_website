import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {
  render() {
    return (
      
        <div className="col m4">
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img src={this.props.project.imgName} />
              <span className="card-title">{this.props.project.title}</span>
            </div>
            <div className="card-content white-text">
              <p>{this.props.project.category}</p>
              <p>{this.props.project.description}</p>
            </div>
            <div className="card-action">
              <a href="#">Poster 1</a>
              <a href="#">CDR</a>
            </div>
          </div>
        </div>
    );
  }
}

export default ProjectItem;
