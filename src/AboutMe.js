import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">About Me</h2>
                <div className="content">
                    <p>I love programming! Been coding for the past two years and I can't get enough of it. React and React Native are my jam. Javascript is the language I speak. Love learning new technologies and creating cool applications.</p>    
         
                    <p>Besides programming I love to eat my weight in popcorn and watch a good flick at the movie theatres. I love eating! I live way too close to a McDonalds. To make sure I don't get too fat I run 5 miles every day and play a lot of basketball and soccer. I love the Utah Jazz (although I am currently a band wagon Warriors fan ha ha). The two greatest tv shows ever made are Game of Thrones and Silcon Valley.</p>
                            
                    <p>Please contact me! I want to work for you!</p>
                </div>
            </div>                
        </section>
    );
  }
}

export default AboutMe;