import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about'
const App =()=>{
    return(
        <>
        <About/>
        </>
        
    )
}
ReactDOM.render(<App/>,document.querySelector("#root"))