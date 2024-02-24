import SkillCard from "./SkillCard"
import reactLogo from '../photos/react-logo.png'
import jsLogo from '../photos/js-logo.png'
import nodeLogo from '../photos/node.png'
import bashLogo from '../photos/bash.jpg'
import cLogo from '../photos/c-logo.png'
import docker from '../photos/docker.png'

const Skills = () => {
    return(
        <div className="skills">
            <div>
                <h1 className="section-title">Skills</h1>
            </div>
            <div className="skills-container">
                <SkillCard 
                img={reactLogo} 
                desc='I have experience using React.js from building this
                website as well as a Todo web app.' />
                <SkillCard 
                img={nodeLogo} 
                desc='Can build backend REST APIs for web apps using the Express.js framework. An 
                example of this is the RESTful CRUD API I made for my Todo web app.' />
                <SkillCard 
                img={bashLogo} 
                desc='
                Using Linux as my primary operating system has made me adept 
                in daily command-line operations, proficiently writing scripts
                 for tasks such as automating file backups, or using command-line tools like Docker.' />
                <SkillCard 
                img={jsLogo} 
                desc='
                Working with React and Node has provided me with 
                extensive experience in JavaScript development.' />
                <SkillCard img={cLogo} desc='I have taken multiple operating systems courses where I used C to
                impliment a shell, a thread scheduler, and a simple file system. Through these 
                projects I learned how to use C to manipulate memory and interact with different
                parts of the operating system.' />
                <SkillCard img={docker} desc='I have experience using docker to self host 
                multiple applications such as Nextcloud. I have also used dockerfiles to 
                to create docker images for my todo web app so that it can be run in a 
                pre-configured environment on any computer.' />
            </div>
        </div>
    )
}

export default Skills