import React from 'react';
import ReactDom from 'react-dom';

const Projects =()=>{
    return(
        <section id="Projects">
        <h1 class="ml-60">Projects</h1>
        <div class="box">
            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/LinkedIn-logo.png" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>LinkedIn</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines. </span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/Git-logo.jpg" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Git</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines. </span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/Portfolio-logo.png" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Portfolio</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines.</span>
                </div>
            </div>
            
        </div>
    </section>


    )
}

export default Projects;