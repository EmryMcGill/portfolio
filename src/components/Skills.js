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
                desc='I have experience using React from building this
                website as well as a Todo web app.' />
                <SkillCard 
                img={nodeLogo} 
                desc='I used Node as a backend for my Todo web app.' />
                <SkillCard 
                img={bashLogo} 
                desc='I have taken a low level operating systems course where I learnt how 
                to interact with the Bash shell and write scripts. I also use Linux as my operating
                system so I use the command line daily.' />
                <SkillCard 
                img={jsLogo} 
                desc='' />
                <SkillCard 
                img={javaLogo} 
                desc='I have taken multiple algorithms and data sctructure courses where I used
                Java to impliment what we learnt.' />
                <SkillCard img={cLogo} desc='I have taken multiple operating systems courses where I used C to
                impliment a shell, a thread scheduler, and a simple file system.' />
                <SkillCard img={pythonLogo} desc='The intro computer science class I took used Python so
                I learnt the fundimentals of programming using Python.' />
            </div>
        </div>
    )
}

export default Skills