import React from 'react';
import ReactDOM from 'react-dom';
const About =()=>{
    return(
        <section id="about">
        <div className="box">
            <div className="profile-summary">
                <div classname="profile-image">
                    <img src="./images/sandeep.jpg" alt="Sandeep Namdev" classname="profile-pic"/>
                </div>
                <div classname="profile-heading">
                    <h1>Sandeep Namdev</h1>
                    <p>
                        <span classname="icon"><i classname="fa fa-envelope-o" aria-hidden="true"></i></span>
                        sandeep.namdev103@gmail.com</p>
                    <p>
                       <sapn classname="icon"><i classname="fa fa-map-marker" aria-hidden="true"></i></sapn>
                        Jaipur, Rajasthan</p>
                </div>
            </div>
            <div classname="profile-description">
                <h1>About Me</h1>
                <p>Separating paragraphs with blank lines is easiest 
                    for readers to scan, but they can also be separated
                    by indenting their first lines. This is often used 
                    to take up less space, such as to save paper in print.</p>
                    <p>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines. This is often used 
                        to take up less space, such as to save paper in print.</p>
            </div>
        </div>
    </section>
    )
}


export default About;