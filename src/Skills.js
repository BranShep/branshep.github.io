import React, { Component } from 'react';
import Skill from './Skill';

class Skills extends Component {
  render() {
    return (
        <aside className="skills aside section">
            <div className="section-inner">
                <h2 className="heading">Skills</h2>
                <div className="content">
                    <p className="intro">
                        I spend most of my time programming using React and React Native. I learn a little more about javascript everyday. Looking to expand my skillset to include C# and Java.
                    </p>
                            
                    <div className="skillset">
                        <Skill 
                            title={'React, React Native, Redux'}
                            level={'Expert'}
                            percentage={'96%'}
                        />

                        <Skill 
                            title={'Javascript, jQuery'}
                            level={'Expert'}
                            percentage={'96%'}
                        />

                        <Skill 
                            title={'HTML5, CSS3, SASS, LESS'}
                            level={'Expert'}
                            percentage={'96%'}
                        />

                        <Skill 
                            title={'Angular 1'}
                            level={'Intermediate'}
                            percentage={'70%'}
                        />

                        <Skill 
                            title={'Node, Express'}
                            level={'Intermediate'}
                            percentage={'70%'}
                        />

                        <Skill 
                            title={'Postgres'}
                            level={'Intermediate'}
                            percentage={'70%'}
                        />                                
                    </div>              
                </div>
            </div>              
        </aside>
    );
  }
}

export default Skills;