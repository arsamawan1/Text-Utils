import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
   const [mode, setmode] = useState('light');
   const [alert, setalert] = useState(null);

   const showalert= (message, type)=>{
     setalert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setalert(null);
     }, 1500);
   }

   const togglemode= () => {
     if(mode === 'dark'){
       setmode('light')
       document.body.style.backgroundColor= 'white'
       showalert("Light mode has been enabled","success");
       document.title= "Text-Utils- Light Mode";
     }
     else{
       setmode('dark')
       document.body.style.backgroundColor= '#2d2d9b'
       showalert("Dark mode has been enabled","success");
       document.title= "Text-Utils- Dark Mode";
     }
   }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode= {mode} togglemode= {togglemode}/>
    <Alert alert="This is alert" alert={alert}/>
    <div className="container my-3">
    <Switch> 
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm showalert={showalert} heading="Enter the text to analyze" mode= {mode}/>
          </Route>
         </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
