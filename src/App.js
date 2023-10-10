import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about.pages.jsx";
import Home from "./pages/home.pages.jsx";
import Contact from "./pages/contact.pages.jsx";
import NotfoundPages from "./pages/notfound.pages.jsx";
import NavbarPages from "./pages/navbar.pages.jsx";
import FooterPages from "./pages/footer.pages.jsx";

const App = () => {
  return (
    <>
      <div>
        <NavbarPages />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotfoundPages />} />
          </Routes>
        </Router>
        <FooterPages />
      </div>
    </>
  );
};

export default App;
