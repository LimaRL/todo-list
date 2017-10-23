import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    //console.log(this.props.project.title);
    this.props.onDelete(id);
  }

  render() {
      //console.log(this.props);
    return (
      <li className="Projects">
          <strong>{this.props.project.title}</strong>: 
          {this.props.project.category}
          <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </li>
    );
  }
}

export default ProjectItem;
