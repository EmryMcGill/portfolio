import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'

const Home = () => {
    return (
        <div className="home">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
        </div>
    )
}

export default Home