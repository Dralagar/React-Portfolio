import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CV from './Components/CV';
import Contact from './Components/Contact';
import NavBar from './NavBar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
