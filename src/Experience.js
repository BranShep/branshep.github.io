import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
        <section className="experience section">
            <div className="section-inner">
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    <div className="item">
                        <h3 className="title">Freelance Web/Mobile Developer <span className="place"><a href="#">Cinder Co.</a></span> <span className="year">(2017)</span></h3>
                        <p>I built an app (ios & android) and website for Cinder Co. to more easily handle their day to day operations. The app and website have the following features:<br />
                            &nbsp;&nbsp;- display company orders<br />
                            &nbsp;&nbsp;- create new orders<br />
                            &nbsp;&nbsp;- track order statuses<br />
                            &nbsp;&nbsp;- display client info<br />
                            &nbsp;&nbsp;- navigate to client address<br />
                            &nbsp;&nbsp;- internal messaging system<br />
                            &nbsp;&nbsp;- archive orders<br />
                            &nbsp;&nbsp;- push notifications (order updates and messages)<br />
                        </p>

                        <p>React Native, Expo, Redux, React, Firebase, ES6, HTML, CSS3</p>      
                     </div>

                    <hr className="divider" />

                    <div className="item">
                        <h3 className="title">Mobile Developer (React Native) - <span className="place"><a href="#">DevMountain Student Delelopers</a></span> <span className="year">(2016)</span></h3>
                        <p>Built an app for home buyers to rate and compare the different homes they are looking to buy.</p>

                        <p>React Native, Expo, Redux, Firebase, ES6 </p>
                    </div>      
                </div>  
            </div>               
         </section>
    );
  }
}

export default Experience;