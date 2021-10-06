import './projects.scss'
import Card from './ProjectCard'

export default function Contact() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="wrapper">

                <div className="card">
                    <Card project_name={"Myntra"} desc={"Clone of India’s most popular e-Commerce fashionwebsite Myntra.com"} techstack={"HTML(EJS), CSS, JavaScript, Node, Express, MongoDB Atlas"} features={<ul>
                        <li>👉  SignUp/SignIn (Authentication with JWT and Bcrypt)</li>
                        <li>👉  Search Bar (Auto Suggestions)</li>
                        <li>👉  Products Gallery (Supports Sorting and Filtering)</li>
                        <li>👉  Dynamic Wish List and Bag for individual users</li>
                        <li>👉  Data Stored in MongoDB Atlas</li>
                    </ul>} imgpath="https://i.pinimg.com/originals/e1/b2/c8/e1b2c832004912c7c5f11c3089604b27.jpg" />
                </div>

                <div className="card">
                    <Card project_name={"Myntra"} desc={"lorem ipsum"} imgpath="https://i.pinimg.com/originals/e1/b2/c8/e1b2c832004912c7c5f11c3089604b27.jpg" />
                </div>

                <div className="card">
                    <Card project_name={"Myntra"} desc={"lorem ipsum"} imgpath="https://i.pinimg.com/originals/e1/b2/c8/e1b2c832004912c7c5f11c3089604b27.jpg" />
                </div>

                <div className="card">
                    <Card project_name={"Myntra"} desc={"lorem ipsum"} imgpath="https://i.pinimg.com/originals/e1/b2/c8/e1b2c832004912c7c5f11c3089604b27.jpg" />
                </div>

            </div>

            <a className='arrowDown' href="#skills">
                <img src="https://www.pngall.com/wp-content/uploads/6/Caret-PNG-File.png" alt="down" />
            </a>
        </div>
    )
}
