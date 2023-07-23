import "./index.css";
import { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </Fragment>
  );
}

export default App;
