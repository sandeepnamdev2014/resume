import React from 'react';
import ReactDom from 'react-dom';
import Paypal from './images/Paypal.png';
import Freshdesk from './images/Freshdesk.png';
import Docusign from './images/Docusign.png'

const Projects =()=>{
    return(
        <section id="Projects">
        <h1 class="ml-60">Projects</h1>
        <div class="box">
            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={Docusign} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Docusign</h2>
                    <span>DocuSign is the most reliable and globally trusted service for electronic signatures and approvals.</span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={Freshdesk} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Freshdesk</h2>
                    <span>Implemented Freshdesk API in this project which help users to raise support tickets for any problem which further reviewed by and resolved by client.</span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={Paypal} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Paypal</h2>
                    <span>Integrated PayPal payment Gateway using java technology. Paypal is implemented fro the same client for which we have designed INTRAC.</span>
                </div>
            </div>
            
        </div>
    </section>


    )
}

export default Projects;