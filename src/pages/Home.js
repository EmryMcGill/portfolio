import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home