//import logo from './logo.svg';
import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import About from './Component/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }
  
  const troggleMode=()=>{
          if(Mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='#2B7A78';
            showAlert("Dark Mode has been enabeled","success");
          }
          else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light Mode has been enabeled","success");
          }
         
  }
  
  //  const [myStyle,setMyStyle]=useState({
  //       backgroundColor:'red'
  //  })
   
    

 
     
      
  
  return (
    <>
        <BrowserRouter>
        <Navbar title="TextUtils" toggleMode={troggleMode} mode={Mode}  about="About us"/>
        <Alert alert={alert}/>
        <div className='container mb-3'>
        <Routes>
            <Route path='/' element={<Textform  heading="Enter your text to analysis" mode={Mode} showAlert={showAlert}/>}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        </div>
        </BrowserRouter>
          
</>
);
}

export default App;
