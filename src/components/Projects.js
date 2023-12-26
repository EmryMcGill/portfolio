import ProjectCard from "./ProjectCard"
import project1 from '../project1.png'

const Projects = () => {
    return (
        <div className="projects">
            <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
        </div>
    )
}

export default Projects