import SkillCard from "./SkillCard"
import project1 from "../project1.png"

const Skills = () => {
    return(
        <div className="skills">
            <div>
                <h1 className="title">Skills</h1>
            </div>
            <div className="skills-container">
                <SkillCard img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <SkillCard img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
            </div>
        </div>
    )
}

export default Skills