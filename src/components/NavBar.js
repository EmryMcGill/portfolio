import { Link } from 'react-scroll'
import { useState } from 'react'
import resume from '../Emry_McGill_Resume.pdf'

const NavBar = () => {

    const [scroll, setScroll] = useState(false)

    window.onscroll = function () {handleScroll()}

    const handleScroll = () => {
        setScroll(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1);
    }

    return (
        <div onScroll={handleScroll} className="navbar" 
        style={{
            margin: scroll ? "0.5em 0" : "0.5em 0.5em",
            borderRadius: scroll ? "0" : "0.5em", 
            transition: "0.2s"}}>
            
            <div className='title-container'>
                <h1 className='title'>Emry McGill</h1>
                <h1 className='port'
                    onClick={() =>
                        window.scrollTo({
                          left: 0,
                          top: 0,
                          behavior: "smooth",
                        })
                      }>Portfolio</h1>
            </div>

            <div className='menu-buttons'>
                <Link className='link' smooth to='projects'>
                    <h3>Projects</h3>
                </Link>

                <Link className='link' smooth to='skills'>
                    <h3>Skills</h3>
                </Link>

                <Link className='link' smooth to='experience'>
                    <h3>Experience</h3>
                </Link>

                <Link className='link' smooth to='education'>
                    <h3>Education</h3>
                </Link>

                <Link className='link' smooth to='contact'>
                    <h3>Contact</h3>
                </Link>

                <a  style={{textDecoration: 'none'}} rel='noreferrer' target='_blank' href={resume}><h3>Resume</h3></a>
           
            </div>
            <h3 className='menu-btn'>Menu</h3>

        </div>
    )
}

export default NavBar