import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "MongoDB", imgURL: "./icons_mongodb.png" },
  { name: "Express.js", imgURL: "./icons_expressjs.png" },
  { name: "React.js", imgURL: "./logos_react.svg" },
  { name: "Node.js", imgURL: "./icons_nodejs.png" },
  { name: "Socket.io", imgURL: "./icons_socketio.png" },
  { name: "Javascript", imgURL: "./icons_js.svg" },
  { name: "Python", imgURL: "./icons_python.png" },
  { name: "Tailwind CSS", imgURL: "./icons_tailwind.png" },
  { name: "Git", imgURL: "./logos_git.svg" },
  { name: "HTML", imgURL: "./icons_html.svg" },
  { name: "CSS", imgURL: "./icons_css.svg" },
  { name: "Postman", imgURL: "./icons_postman.png" },
  { name: "Java", imgURL: "./icons_java.png" },
]

export const projectData: Project[] = [
  {
    name: "Goal Connect - Indian Football Portal",
    description:
      "A web app offering comprehensive match data, an integrated e-commerce marketplace for football gear, a player management system for tracking stats and connecting with coaches, and a job portal for opportunities in the football industry. Intergrated RazorPay for payments, socket.io live chat page, JWT login and signup authentication. Node.js and MongoDB backend, React.js frontend. Live webscraping to display match data across India.",
    projectURL: "https://goal-connect.vercel.app/",
    githubURL: "",
    imgURL: "./goal-connect.png",
  },
  {
    name: "Telechat",
    description:
      "A full stack chat application that allows real-time chat communication using Socket.io. Allowing image uploads as well as JWT login authentication, crypted passwords using bcrypt.js, MERN stack",
    projectURL: "https://chat-application-fullstack.onrender.com/",
    githubURL: "https://github.com/devik-nangia/chat-application-fullstack",
    imgURL: "./telechat.png",
  },
  {
    name: "Tenzies",
    description:
      "An awesome game made with React.js. Roll until all dice are the same. Click each die to freeze it at its current value between rolls. Try to get the fastest time!",
    projectURL: "https://devik-nangia.github.io/Tenzi-game/",
    githubURL: "https://github.com/devik-nangia/Tenzi-game",
    imgURL: "./tenzies.png",
  },
  {
    name: "Task Manager",
    description:
      "A full stack web app to manage and keep track of tasks. Stores tasks in MongoDB, Frontend made with React.js and shacdn ui.",
    projectURL: "",
    githubURL: `https://github.com/devik-nangia/Task-manager`,
    imgURL: "./task-manager.png",
  },
]

export const experience = (
  (new Date().getTime() - new Date("2024-07-15").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toLocaleString("en", {
  maximumFractionDigits: 2,
  style: "unit",
  unit: "year",
  unitDisplay: "long",
})

export const aboutData: About = {
  education: {
    title: "B.tech in Computer Science Engineering, with Artificial Intelligence & Machine Learning",
    grade: "9.0 CGPA",
    subtitle: "From Manipal Institute of Technology, Manipal",
  },
  school: {
    title: "Amity International School, Saket",
    grade: "CBSE Class XII - 94.4%",
    subtitle: "Saket, New Delhi"
  }
}
