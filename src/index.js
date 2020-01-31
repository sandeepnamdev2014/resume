import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Exporties from './components/Experties';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App =()=>{
    return(
        <>
        <About/>
        <Exporties/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
        
    )
}
ReactDOM.render(<App/>,document.querySelector("#root"))