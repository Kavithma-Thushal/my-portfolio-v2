import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./views/components/Navbar/Navbar";
import {Footer} from "./views/components/Footer/Footer";
import {Home} from "./views/pages/Home/Home";
import {About} from "./views/pages/About/About";
import {Skills} from "./views/pages/Skills/Skills";
import {Projects} from "./views/pages/Projects/Projects";
import {Services} from "./views/pages/Services/Services";
import {Contacts} from "./views/pages/Contacts/Contacts";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/my-portfolio-v2" element={<Home/>}/>
                <Route path="/my-portfolio-v2/home" element={<Home/>}/>
                <Route path="/my-portfolio-v2/about" element={<About/>}/>
                <Route path="/my-portfolio-v2/skills" element={<Skills/>}/>
                <Route path="/my-portfolio-v2/projects" element={<Projects/>}/>
                <Route path="/my-portfolio-v2/services" element={<Services/>}/>
                <Route path="/my-portfolio-v2/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}