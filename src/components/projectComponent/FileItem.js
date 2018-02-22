import React, { Component } from 'react';
import './Projects.css';

class FileItem extends Component {
  render() {
    return (
      <a className="inline-block" target="_blank" href={this.props.file.link} download={this.props.file.name}>{this.props.file.name}</a>

    );
  }
}

export default FileItem;
