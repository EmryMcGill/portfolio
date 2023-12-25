import { Link } from 'react-router-dom'
import { useState } from 'react'

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
            <Link className='link' to='/'>
                <h1>Emry McGill</h1>
            </Link>

            <div className='menu-buttons'>
                <Link className='link' to='/'>
                    <h3>About</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Projects</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Skills</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Experience</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Education</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Contact</h3>
                </Link>

                <Link className='link' to='/'>
                    <h3>Resume</h3>
                </Link>
            </div>
        </div>
    )
}

export default NavBar