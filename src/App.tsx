import {HashRouter as Router, Routes, Route} from "react-router-dom";
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
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}