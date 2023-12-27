import ProjectCard from "./ProjectCard"
import project1 from '../project1.png'

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div>
                <h1 className="title">Projects</h1>
            </div>
            <div className="projects-container">
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
            </div>
        </div>
    )
}

export default Projects