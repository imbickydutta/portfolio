import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import './app.scss'

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className='sections'>
        <Intro />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
