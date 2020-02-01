import React from 'react';
import ReactDOM from 'react-dom';
import Sandeep from './images/sandeep.jpg'
const About =()=>{
    return(
        <section id="about">
        <div className="box">
            <div className="profile-summary">
                <div className="profile-image">
                    <img src={Sandeep} alt="Sandeep Namdev" className="profile-pic"/>
                </div>
                <div className="profile-heading">
                    <h1>Sandeep Namdev</h1>
                    <p>
                        <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                        sandeep.namdev103@gmail.com</p>
                    <p>
                       <sapn className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></sapn>
                        Jaipur, Rajasthan</p>
                </div>
            </div>
            <div className="profile-description">
                <h1>About Me</h1>
                <p>Talented individual with ability to work under little or no supervision. Hopeful for the Software Developer position in your organization to utilize expertise in software development and testing, as well as deployment and support using agile development methodologies. Possess strong ability to develop application using Java based tools.</p>
            </div>
        </div>
    </section>
    )
}


export default About;