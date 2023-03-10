import Nav from "./components/Nav/Nav";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Creed from "./components/Creed/Creed";
import Office from "./components/Office/Office";
import Faq from "./components/FAQ/Faq";
import Event from "./components/Event/Event";
import Add from "./components/Add/Add";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";
import About from "./components/About/About";
import MobileNav from "./components/MobileNav/MobileNav";
import Senator from "./components/Senator/Senator";

function App() {
  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <Intro />
      <Creed />
      <About />
      <Senator />
      <Office />
      <Event />
      <Faq />
      <Add />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
