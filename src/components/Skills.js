import SkillCard from "./SkillCard"
import reactLogo from '../react-logo.png'
import jsLogo from '../js-logo.png'
import nodeLogo from '../node.png'
import bashLogo from '../bash.jpg'
import javaLogo from '../java.jpg'
import cLogo from '../c-logo.png'
import pythonLogo from '../python.png'

const Skills = () => {
    return(
        <div className="skills">
            <div>
                <h1 className="title">Skills</h1>
            </div>
            <div className="skills-container">
                <SkillCard img={reactLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={nodeLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={bashLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={jsLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={javaLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={cLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={pythonLogo} desc='this is a sample description for a project. blah blah tree sky bird' />
            </div>
        </div>
    )
}

export default Skills