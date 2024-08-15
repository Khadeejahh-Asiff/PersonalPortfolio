import "./App.css";
import NavbarMain from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import SkillsCarousal from "./Components/SkillsCarousal.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Banner />
      <SkillsCarousal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
