// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from "./components/About";
import TextForm from "./components/TextForm";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500) 
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light";
    }

  }
  
  return (
    <>
        {/* <Navbar title="TextUtils" aboutText="AboutUs"/> */}
        {/* <Navbar/> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3 ">

          <Switch>
            {/* /users --> component 1
            /users/home --> component 2 */}
            {/* Use exact with the path as react uses partial match so using exact solves the issue. */}
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to display" mode={mode}/> 
            </Route>
          </Switch>

        </div>
      </Router>    

    </>
  );
}

export default App;
