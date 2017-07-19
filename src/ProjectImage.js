import React, { Component } from 'react';

class ProjectImage extends Component {
  render() {
    return (
        <a onClick={() => this.props.setModalVisible()}>
            <img className="project-images" src={`assets/images/${this.props.imageFileName}`} alt="project name" />
        </a>
    );
  }
}

export default ProjectImage;