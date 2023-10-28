import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from'./Nav';
import './Hero'
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detial from './Detial';
import Home from './Home';
import Foot from './Footer';
import Login from './Login'
import Signup from './Sing'
import BlogDetail from './Blogdetail';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
   
        
        <Routes>
        <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="detial" element={<Detial/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="sing" element={<Signup />} />
          <Route path='/blog/:id' element={<BlogDetail/>}/>
        </Routes> 
        {/* <Login/> */}
        {/* <Signup/> */}

        <Foot/>
      </Router>
      

      
      
    </div>
  );
}

export default App;
