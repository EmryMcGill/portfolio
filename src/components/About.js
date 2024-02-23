import profile from '../photos/profileImg.jpg'

const About = () => {

    const copyEmail = () => {
        navigator.clipboard.writeText("emrymcgill@gmail.com");
        alert("emrymcgill@gmail.com Copied to Clipboard");
    }

    return (
        <div className="about">
            <img className='photo' src={profile} alt="Profile Picture" />
            <div className='btn-container'>
                <button className='email-btn' onClick={copyEmail}>email</button>
                <a className="btn" target="_blank"  href="https://www.linkedin.com/in/emry-mcgill-ba8921238">LinkedIn</a>
                <a className="btn" target="_blank"  href="https://github.com/emrymcgill">Github</a>
            </div>
            <p>Hi! My name is Emry McGill, I am a third year student
                at McGill University with a major in Computer Science.
                My intrests include web development and cloud computing.
                An area that I am keen to learn more about is network security.
                I love to learn and am excited to explore many more areas of 
                computer science.
            </p>
        </div>
    )
}

export default About