import React from 'react';
import ReactDom from 'react-dom';
import AwareIM from './images/AwareIM.png';
import HighCharts from './images/HighChartsImage.png';
import KendoUI from './images/KendoUI.jpg' 

const Experties =()=>{
    return(
        <section id="expertise">
        <h1 class="ml-60">My Expertise</h1>
        <div class="box">
            

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={AwareIM} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>AwareIM</h2>
                    <span>AwareIM is rapid web application developement tool. In which I have developed an entire application called INTRAC, which is live and currently used by the canaian oil and gas companies. </span>
                </div>
            </div>

            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={KendoUI} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Kendo UI</h2>
                    <span>Designed an in-build tool using Kendo UI in which user can generate templates and based on that templates multiple users can generated document and later these documents processed and signoff through different-different users.</span>
                </div>
            </div>
            
            <div class="row-container">

                <div class="left w-100 h-100">
                    <img src={HighCharts} alt="test" class="w-100 h-100"/>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>HighCharts</h2>
                    <span>Implemented HighCharts to extend graphical capability of data. I have used gauge chart, bar chart, pie chart, column chart and heat map in this project.  </span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Experties;