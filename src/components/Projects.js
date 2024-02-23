import ProjectCard from "./ProjectCard"
import project1 from '../photos/project1.png'
import gridImg from '../photos/grid.png'
import robot1 from '../photos/robot1.JPG'
import robot2 from '../photos/robot2.png'
import portfolio from '../photos/portfolio.png'
import todo from '../photos/todo.png'

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div>
                <h1 className="section-title">Personal Projects</h1>
            </div>
            <div className="projects-container">
            <ProjectCard 
                title="Todo Web App" 
                img={todo} 
                demo={true}
                git={true}
                gitLink='https://github.com/EmryMcGill/mytodos'
                desc='A todo web app built using the MERN stack and able to be self hosted
                using Docker.'
                descDetail='This todo web app was built using the MERN stack 
                (MongoDB, React, Express, and Node). I have also configured Docker images
                for the application so that it can be self hosted on a home server. A 
                link to the Dockerhub images is in the Github Repo.' />
                
                <ProjectCard 
                title="Walking Robot" 
                img={robot2} 
                demo={true}
                git={true}
                demoLink='https://youtu.be/UXs05hkiGQI'
                gitLink='https://github.com/EmryMcGill/Walking-Bipedal-Robot-Version-2'
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
                demo={true}
                git={true}
                demoLink='http://localhost:3000/'
                gitLink='https://github.com/EmryMcGill/portfolio'
                desc='A portfolio website built with React.'
                descDetail='This portfolio website was built with React. It was a good
                project to learn about web development, and how to work with domains, 
                sub-domains, and getting a website hosted.' />

            <ProjectCard 
                title="Grid" 
                img={gridImg}
                git={false}
                demo={false}
                desc='A mobile game build with the Unity game engine.' 
                descDetail='Grid is a mobile game avalible on the Google Play Store for Android devices. 
                It is a simple memory game where you have to memorize a safe path through a grid
                of tiles. I made a simple algorithm that generates random paths on the grid so
                that there are an infinite amount of random levels. I build this project using
                the Unity game engine. It was one of the first programming projects I completed.' />
            </div>
        </div>
    )
}

export default Projects