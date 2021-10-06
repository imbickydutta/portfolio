import './intro.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div className="intro" id='intro'>
      <div className="left">

        <div className="imgContainer">
          <img src="./assets/myImg.png" alt="man" />
        </div>

      </div>

      <div className="right">
        <div className="wrapper">




          <h2>Hi There👋, I'm</h2>
          <h1>Bicky Dutta</h1>
          <h3><span>Full Stack Web Developer</span></h3>

          <div className='socials'>
            <a className="icons" href="https://github.com/imbickydutta" target="_blank" rel="noreferrer"> <GitHubIcon fontSize="large" /> </a>

            <a className="icons" href="https://www.linkedin.com/in/bicky-dutta-8a851a19b/" target="_blank" rel="noreferrer"> <LinkedInIcon fontSize="large" /> </a>
          </div>
        </div>
        <a className='a' href="#projects">
          <img src="https://www.pngall.com/wp-content/uploads/6/Caret-PNG-File.png" alt="down" />
        </a>
      </div>
    </div>
  )
}
