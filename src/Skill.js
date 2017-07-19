import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
        <div className="item">
            <h3 className="level-title">{this.props.title}<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to add more info...">{this.props.level}</span></h3>
                <div className="level-bar">
                    <div className="level-bar-inner" data-level={`${this.props.percentage}`}>
                    </div>                                      
                </div>                               
        </div>
    );
  }
}

export default Skill;