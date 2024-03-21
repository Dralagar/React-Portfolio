import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import CV from "./Components/CV.jsx";
import Contact from "./Components/Contact.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Footer from "./Components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Styles/App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Route path="/">
          <Home />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        {/*<a href="/2">Go to Route 2... </a>*/}
        <Route path="/CV">
          <CV />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
