import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Education from './Education';
import Languages from './Languages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-md-8 col-sm-12 col-xs-12">
              <AboutMe />

              <Projects />

              <Experience />
            </div>

            <div className="secondary col-md-4 col-sm-12 col-xs-12">
              <BasicInfo />

              <Skills />

              <Testimonials />

              <Education />

              <Languages />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
