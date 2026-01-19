import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Work from "./Components/Work.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <section id="Home" className="pt-2 min-h-screen ">
        <Home />
      </section>
      <section id="About" className=" min-h-screen">
        <About />
      </section>
      <section id="Work" className="min-h-screen">
        <Work />
      </section>
      <section id="Contact" className=" min-h-screen">
        <Contact />
      </section>
    </>
  );
}

export default App;
