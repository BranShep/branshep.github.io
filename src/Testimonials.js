import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
        <aside className="testimonials aside section">
            <div className="section-inner">
                <h2 className="heading">Testimonials</h2>
                <div className="content">
                    <div className="item">
                        <blockquote className="quote">                                  
                            <p><i className="fa fa-quote-left"></i>Brandon really delivered for our company! Our custom made app and website have saved us a lot of time. Would recommend him to anyone.</p>
                        </blockquote>                
                        <p className="source"><span className="name">Chase Martin</span><br /><span className="title">Cinder Co.</span></p>                                                             
                    </div>
                            
                    <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Linkedin</a></p> 
                </div>
            </div>
        </aside>
    );
  }
}

export default Testimonials;