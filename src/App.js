import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      < Header />
      < About />
      < Skills />
      < Projects />
      < Contact />
    </div>
  );
}

export default App;
