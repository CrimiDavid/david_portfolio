import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/navbar.jsx';
import Home from './components/Pages/home.jsx';
import About from './components/Pages/about.jsx';
import Projects from './components/Pages/projects.jsx';
import Contact from './components/Pages/contact.jsx';
import TreeComponent from "./components/Objects/tree.jsx";
import React, {useState} from "react";


function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div className="App">
            <Navbar
                visible={visible}
                setVisible={setVisible}
            />
            <div id="home">
                <Home />
                <TreeComponent visible={visible} setVisible={setVisible} />
            </div>
            <div id="about">
                <About />
                <TreeComponent visible={visible} setVisible={setVisible} />
            </div>
            <div id="projects">
                <Projects />
                <TreeComponent visible={visible} setVisible={setVisible} />
            </div>
            <div id="contact">
                <Contact />
                <TreeComponent visible={visible} setVisible={setVisible} />
            </div>
        </div>
    );
}


export default App;
