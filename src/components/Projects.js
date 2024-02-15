import ProjectCard from "./ProjectCard"
import project1 from '../photos/project1.png'
import gridImg from '../photos/grid.png'
import robot1 from '../photos/robot1.JPG'
import robot2 from '../photos/robot2.png'
import portfolio from '../photos/portfolio.png'

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div>
                <h1 className="section-title">Personal Projects</h1>
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
                
                <ProjectCard 
                title="Walking Robot" 
                img={robot1} 
                desc='A walking robot robot powered by an Arduino microprocessor, 
                and programmed in C++'
                descDetail='I designed and programmed a walking biped robot powered 
                by an Arduino microprocessor, and programmed in C++. I made 2 iterations 
                of the robot. The first one I deisgned and 3D printed the pieces, but only
                used 4 servo motors. In the second version I used metal pieces, and 6 servos
                to add the ability of leaning side to side.' />
                
                <ProjectCard 
                title="Portfolio Website" 
                img={portfolio} 
                desc='This portfolio website was built using React.'
                descDetail='This portfolio website was built using React.' />
                
                <ProjectCard title="Todo Web App" img={project1} desc='this is a sample description for a project. blah blah tree sky bird' />
            </div>
        </div>
    )
}

export default Projects