import './App.css';

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollArrow from './components/ScrollArrow';

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
        <ScrollArrow />
      </main>
    </div>
  );
}

export default App;
