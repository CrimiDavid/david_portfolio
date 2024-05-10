import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/navbar.jsx';
import Home from './components/Pages/home.jsx';
import About from './components/Pages/about.jsx';
import Projects from './components/Pages/projects.jsx';
import Contact from './components/Pages/contact.jsx';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}


export default App;
