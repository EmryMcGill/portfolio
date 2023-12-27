import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

const Home = () => {
    return (
        <div className="home">
            <About />
            <Projects />
            <Experience />
        </div>
    )
}

export default Home