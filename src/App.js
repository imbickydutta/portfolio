import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'


import './app.scss'
import { useState } from 'react'
function App() {

  const [menuOn, setMenuOn] = useState(false)


  return (
    <div className="app">
      <Navbar menuOn={menuOn} setMenuOn={setMenuOn} />
      <Menu menuOn={menuOn} setMenuOn={setMenuOn} />
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
