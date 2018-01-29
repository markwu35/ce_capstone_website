import React, { Component } from 'react';
import './Projects.css';

class FileItem extends Component {
  render() {
    return (
      <a className="inline-block" href={this.props.file.link}>{this.props.file.name}</a>
    );
  }
}

export default FileItem;
