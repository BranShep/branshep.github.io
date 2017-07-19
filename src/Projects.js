import React, { Component } from 'react';
import ProjectImages from './ProjectImages';

const cinderImages = [
    "IMG_0243.PNG", 
    "IMG_0244.PNG", 
    "IMG_0245.PNG", 
    "IMG_0246.PNG", 
    "IMG_0247.PNG", 
    "IMG_0248.PNG", 
    "IMG_0249.PNG", 
    "IMG_0250.PNG", 
    "IMG_0251.PNG" 
];

const homeBuyerImages = [
    "IMG_0252.PNG",
    "IMG_0253.PNG",
    "IMG_0254.PNG",
    "IMG_0255.PNG",
    "IMG_0256.PNG",
    "IMG_0257.PNG"
]

class Projects extends Component {
  render() {
    return (
        <section className="latest section">
            <div className="section-inner">
                <h2 className="heading">Latest Projects</h2>
                <div className="content">    

                    <div className="item row">
                        <a className="col-md-4 col-sm-4 col-xs-12" href="https://www.cinderboard.com" target="_blank">
                            <img className="img-responsive project-image" src="assets/images/cinder_icon.png" alt="project name" />
                        </a>

                        <div className="desc col-md-8 col-sm-8 col-xs-12">
                            <h3 className="title"><a href="https://www.cinderboard.com" target="_blank">Cinder Co. App & Website</a></h3>
                            <p>I built an app (ios & android) and website for Cinder Co. to more easily handle their day to day operations. The app and website have the following features:<br />
                                - display company orders<br />
                                - create new orders<br />
                                - track order statuses<br />
                                - display client info<br />
                                - navigate to client address<br />
                                - internal messaging system<br />
                                - archive orders<br />
                                - push notifications (order updates and messages)
                            </p>

                            <p>          
                                I built the app using React Native and firebase as the backend. The website was built with React, Node.js and also uses the same firebase database.<br />
                            </p>
                            <p><a className="more-link" href="https://cinderboard.com/" target="_blank"><i className="fa fa-external-link"></i>http://www.cinderboard.com</a></p>

                            <ProjectImages projectImagesArray={cinderImages} />
                        </div> 
                                
                        
                    </div>

                    <hr className="divider" />

                    <div className="item row">
                        <a className="col-md-4 col-sm-4 col-xs-12" href="https://www.cinderboard.com" target="_blank">
                            <img className="img-responsive project-image" src="assets/images/home_buyer_icon.png" alt="project name" />
                        </a>
                    
                        <div className="desc col-md-8 col-sm-8 col-xs-12">
                            <h3 className="title"><a href="https://www.cinderboard.com" target="_blank">Home Buyer App</a></h3>
                            <p>
                                React Native ios/android app for home buyers to rate and compare the different homes on the market.
                            </p>

                            <p>React Native, Expo, Redux, Firebase, ES6 </p>

                            <ProjectImages projectImagesArray={homeBuyerImages} />
                        </div>  
                    </div>

                    <hr className="divider" />

                    <div className="item row">
                        <a className="col-md-4 col-sm-4 col-xs-12" href="http://chasepn.com" target="_blank">
                            <img className="img-responsive project-image" src="assets/images/chasepn.png" alt="project name" />
                        </a>

                        <div className="desc col-md-8 col-sm-8 col-xs-12">
                            <h3 className="title"><a href="http://www.chasepn.com" target="_blank">chaSEPN</a></h3>
                            <p>chaSEPN is a site created for my friend to create his own espn-like power rankings for NBA teams.</p>
                            
                            <p>Angular, Node, Postres</p>
                            <p><a className="more-link" href="http://chasepn.com/" target="_blank"><i className="fa fa-external-link"></i>http://www.chasepn.com</a></p>
                        </div>                          
                    </div>
                </div> 
            </div>               
        </section>
    );
  }
}

export default Projects;