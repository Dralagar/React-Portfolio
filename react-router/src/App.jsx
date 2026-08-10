import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CV from "./Components/CV.jsx";
import Contact from "./Components/Contact.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Footer from "./Components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
