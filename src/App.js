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

function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <Creed />
      <Office />
      <Event />
      <Faq />
      <Add />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
