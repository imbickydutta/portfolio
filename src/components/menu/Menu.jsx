import './menu.scss'

export default function Menu({ menuOn, setMenuOn }) {
    return (
        <div className={"menu " + (menuOn && "active")}>
            <ul>
                <li onClick={() => setMenuOn(false)}><a href="#intro">Home</a></li>
                <li onClick={() => setMenuOn(false)}><a href="#projects">Projects</a></li>
                <li onClick={() => setMenuOn(false)}><a href="#skills">Skills</a></li>
                <li onClick={() => setMenuOn(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
