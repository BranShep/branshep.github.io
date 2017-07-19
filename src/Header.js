import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">                       

              <img className="profile-image img-responsive pull-left" id="profile-pic" src="assets/images/picture.png" alt="James Lee" />

              <div className="profile-content pull-left">
                  <h1 className="name">Brandon Shepherd</h1>
                  <h2 className="desc">Web App Developer</h2>   
                  <ul className="social list-inline">                 
                      <li><a href="https://www.linkedin.com/in/brandon-shepherd-4916a296" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="https://github.com/BranShep" target="_blank"><i className="fa fa-github-alt"></i></a></li> 
                      <li><a href="https://www.facebook.com/brandon.shepherd.58" target="_blank"><i className="fa fa-facebook-f"></i></a></li>                                  
                  </ul> 
              </div>
              <a className="btn btn-cta-primary pull-right" href="mailto:brandonkshepherd@gmail.com" target="_blank"><i className="fa fa-paper-plane"></i> Contact Me</a>              
          </div>
        </header>
      </div>
    );
  }
}

export default Header;