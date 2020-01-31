import React from 'react';
import ReactDom from 'react-dom';

const Experties =()=>{
    return(
        <section id="expertise">
        <h1 class="ml-60">My Expertise</h1>
        <div class="box">
            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/react-logo.jpg" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>React JS</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines. </span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/JS-logo.png" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Javascript</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines. </span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src="images/CSS-logo.png" alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>HTML & CSS</h2>
                    <span>Separating paragraphs with blank lines is easiest 
                        for readers to scan, but they can also be separated
                        by indenting their first lines.</span>
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default Experties;