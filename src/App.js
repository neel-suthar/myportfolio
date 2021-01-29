import './App.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
