import React, { Component } from 'react';
import './ProjectItem.css';

class MemberItem extends Component {
  render() {
    return (
      <div className="chip">
        <img src={this.props.member.imgName} alt="Contact Person" />
        {this.props.member.name}
      </div>
    );
  }
}

export default MemberItem;
