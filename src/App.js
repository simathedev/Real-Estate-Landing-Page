import './App.css';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Properties from './Components/Properties';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="w-full min-h-full flex flex-col ">
      <div className="headingArea"> 
      <Header/>
      <Navbar/>
      </div>
    <Intro/>
    <About/>
    <Properties/>
    <div className='flex flex-col'>
    <Contact/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
