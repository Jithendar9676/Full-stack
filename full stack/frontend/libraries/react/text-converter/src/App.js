
import './App.css';
import AboutUS from './Components/About/AboutUS';
import Narbar1 from './Components/Navbar/Narbar1';
 import TextForm from './Components/Textform/TextForm';
import React ,{useState} from 'react';
import Alert from './Components/Alert/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



function App(props) {

   const [mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)

   const showAlert=(message, type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);

   }
   const toggleMode=()=>{
     if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor='#212837';
       showAlert("Dark mode enbled", "success");
     }else{
       setMode('light')
       document.body.style.backgroundColor='white';
       showAlert("Light mode enbled", "success");
     }
   }
  return (
   <>
     <Router>
  <Narbar1 title="TEXT CONVERTER" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3' >
    <Routes>
    <Route exact path="/about" element={<AboutUS/>}/>
  <Route exact path="/" element={ <TextForm heading="Enter The Text Below To Convert" mode={mode} showAlert={showAlert}/> }/>
    </Routes>
   
          
 
  </div>
  </Router>

  </>
  );
}

export default App;
