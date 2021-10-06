import './projects.scss'
import Card from './ProjectCard'

export default function Contact() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="wrapper">

                <div className="card">
                    <Card project_name={"Myntra"} desc={"Clone of India’s most popular e-Commerce fashion website Myntra.com. This was our construct week project. Our team consisted of 3 developer. For more info checkout the github link."} techstack={"HTML(EJS), CSS, JavaScript, Node, Express, MongoDB Atlas"} features={<ul>
                        <li>👉  SignUp/SignIn (Authentication with JWT and Bcrypt)</li>
                        <li>👉  Search Bar (Auto Suggestions)</li>
                        <li>👉  Products Gallery (Supports Sorting and Filtering)</li>
                        <li>👉  Dynamic Wish List and Bag for individual users</li>
                        <li>👉  Data Stored in MongoDB Atlas</li>
                    </ul>} imgpath="./assets/myntra2.png" />
                </div>

                <div className="card">
                    <Card project_name={"MailChimp"} desc={"Mailchimp is used to send email campaigns that is to send email in bulk to all subscribed customers at once. This was a Team Project. in this project we collaborated with included designers. Our Team consited of 2 designers and 4 Developers."} techstack={"React, JS, Styled Components, Node, Express, MongoDB Atlas"} imgpath="./assets/mailchimp.png" features={<ul>
                        <li>👉  SignUp (Email Validation and Password Strength Check)</li>
                        <li>👉  Dashboard with sugestions for new users</li>
                        <li>👉  Adding Multiple Recipients at once</li>
                        <li>👉  Editable Email Templates</li>
                        <li>👉  Uploading Image using Drag and Drop</li>
                    </ul>} />
                </div>

                <div className="card">
                    <Card project_name={"Tic Tac Toe Game"} techstack={"React, CSS, JavaScript"} desc={"Classic Tic Tac Toe game. It was my individual project made with react. Built on the first week of learning React hooks."} features={<ul>
                        <li>👉  Player Turn Indicator and Winner/Draw Indicator</li>
                        <li>👉  Button For Resetting the Game</li>
                        <li>👉  History of all the played moves (go to any history move)</li>
                    </ul>} imgpath="./assets/tictactoe.png" />
                </div>

                <div className="card">
                    <Card project_name={"Restaurants App"} techstack={"React, CSS, JavaScript, Material UI"} desc={"Simple Food Delivery App. Lets user browse restaurants according to their choice. Created to learn Material UI and React Hooks."} features={<ul>
                        <li>👉  Restaurants Gallery (Sorting and Filtering)</li>
                        <li>👉  Resetting all filters and sort</li>
                        <li>👉  Used Mateiral UI buttons and Cards</li>
                    </ul>} imgpath="./assets/restaurant.png" />
                </div>

            </div>

            <a className='arrowDown' href="#skills">
                <img src="https://www.pngall.com/wp-content/uploads/6/Caret-PNG-File.png" alt="down" />
            </a>
        </div>
    )
}
