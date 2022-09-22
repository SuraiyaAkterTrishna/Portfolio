import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Services from "./Services/Services";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/project/:id" element={<ProjectDetails></ProjectDetails>}/>
        <Route path="/projects/project/:id" element={<ProjectDetails></ProjectDetails>}/>
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
