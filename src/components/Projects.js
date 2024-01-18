import ProjectCard from "./ProjectCard"
import project1 from '../project1.png'
import gridImg from '../grid.png'

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div>
                <h1 className="title">Personal Projects</h1>
            </div>
            <div className="projects-container">
                <ProjectCard 
                title="Grid" 
                img={gridImg}
                desc='Grid is a mobile game build with the Unity game engine.' 
                descDetail='Grid is a mobile game avalible on the Google Play Store for Android devices. 
                It is a simple memory game where you have to memorize a safe path through a grid
                of tiles. I made a simple algorithm that generates random paths on the grid so
                that there are an infinite amount of random levels. I build this project using
                the Unity game engine. It was one of the first programming projects I completed.' />
                
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
                
                <ProjectCard title="project 1" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
            </div>
        </div>
    )
}

export default Projects