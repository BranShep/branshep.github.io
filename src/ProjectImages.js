import React, { Component } from 'react';
import ProjectImage from './ProjectImage';
import Modal from 'react-modal';

class ProjectImages extends Component {
  state = {
    modalVisible: false
  }

  setModalVisible() {
      this.setState({ modalVisible: true });
  }

  renderImages(projectImagesArray) {
    return this.props.projectImagesArray.map((image, index) => {
        return <ProjectImage setModalVisible={this.setModalVisible.bind(this)} imageFileName={image} />
    });
  }

  render() {
    return (
        <div className="image-bar">
            {this.renderImages(this.props.projectImagesArray)}

            
            <Modal
              isOpen={this.state.modalVisible}
              contentLabel="Modal"
              style={modalStyles}
              shouldCloseOnOverlayClick={true}
              onClick={() => console.log("yyo youy oy")}
            >   
                <div id="myGallery" className="carousel slide" data-interval="false">
                    <div className="carousel-inner">
                        <div className="item active"> 
                            <img className="carousel-img" src="assets/images/IMG_0243.PNG" alt="item0" />
                        </div>

                        <div className="item"> 
                            <img className="carousel-img" src="assets/images/IMG_0244.PNG" alt="item1" />
                        </div>

                        <div className="item"> 
                            <img className="carousel-img" src="assets/images/IMG_0245.PNG" alt="item2" />
                        </div>  
                    </div>
                            
                    <a 
                      className="left carousel-control" href="#myGallery" 
                      role="button" data-slide="prev"
                    > 
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>

                    <a 
                      className="right carousel-control" 
                      href="#myGallery" 
                      role="button" 
                      data-slide="next"
                    >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>

                </div>
            </Modal>
        </div>
    );
  }
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    margin: 'auto',
    width: '400px',
    background: 'pink',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: 'none',
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    top: '50px',
    right: '50px'
  }
}

export default ProjectImages;