import SkillCard from "./SkillCard"
import reactLogo from '../photos/react-logo.png'
import jsLogo from '../photos/js-logo.png'
import nodeLogo from '../photos/node.png'
import bashLogo from '../photos/bash.jpg'
import javaLogo from '../photos/java.jpg'
import cLogo from '../photos/c-logo.png'
import pythonLogo from '../photos/python.png'

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
                desc='I used Node.js as a backend for my Todo web app.' />
                <SkillCard 
                img={bashLogo} 
                desc='
                Using Linux as my primary operating system has made me adept 
                in daily command-line operations, proficiently writing scripts
                 for tasks such as automating file backups, or using command-line tools like Docker.' />
                <SkillCard 
                img={jsLogo} 
                desc='' />
                <SkillCard img={cLogo} desc='I have taken multiple operating systems courses where I used C to
                impliment a shell, a thread scheduler, and a simple file system. Through these 
                projects I learned how to use C to manipulate memory and interact with different
                parts of the operating system.' />
                <SkillCard img={pythonLogo} desc='The intro computer science class I took used Python so
                I learnt the fundimentals of programming using Python.' />
            </div>
        </div>
    )
}

export default Skills