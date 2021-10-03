// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
        {/* <Navbar title="TextUtils" aboutText="AboutUs"/> */}
        {/* <Navbar/> */}

        <Navbar title="TextUtils"/>
        <div className="container my-3 ">
          <TextForm heading="Enter the text to display"/> 
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
