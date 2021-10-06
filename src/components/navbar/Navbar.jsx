import './navbar.scss'
import { Person, Mail } from "@mui/icons-material";

export default function Navbar({ menuOn, setMenuOn }) {


  return (
    <div className={"navbar " + (menuOn && "active")}>
      <div className="wrapper">
        < div className="left" >
          <a className="logo" href="#intro"> &lt;bickyDutta/&gt;</a>

          <div className="itemContainer">
            <Person className="icon" />
            <span>+91-7001347896</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>imbickydutta@gmail.com</span>
          </div>

        </div >
        <div className="right" >
          <div className="hamburger" onClick={() => setMenuOn(!menuOn)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div >
    </div >
  )
}
