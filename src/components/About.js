import profile from '../photos/profileImg.jpg'

const About = () => {
    return (
        <div className="about">
            <img className='photo' src={profile} alt="Profile Picture" />
            <div className='btn-container'>
                <button className='email-btn'>email</button>
                <button>Github</button>
                <button>LinkedIn</button>
            </div>
            <p>Hi! My name is Emry McGill, I am a third year student
                at McGill University with a major in Computer Science.
                My intrests include cloud computing, web development,
                and network security. I love to learn
                and am excited to explore many more areas of computer science.
            </p>
        </div>
    )
}

export default About