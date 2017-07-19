import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
        <aside className="education aside section">
            <div className="section-inner">
                <h2 className="heading">Education</h2>
                <div className="content">
                    <div className="item">                      
                        <h3 className="title"><i className="fa fa-graduation-cap"></i> Dev Mountain Coding School (2016)</h3>
                        <h4 className="university">Angular, Javascript, Html, CSS, Node, Postgres <span className="year">(2016)</span></h4>
                    </div>
                </div>
            </div>
        </aside>
    );
  }
}

export default Education;
