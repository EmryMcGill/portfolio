const ExperienceCard = ({ company }) => {
    return (
        <div className="experience-card">
            <div className="left-side">
                <h1 className="company">{company}</h1>
                <h2 className="position">{position}</h2>
                <p className="desc">{desc}</p>
            </div>
            <div className="right-side">
                <h3>{date}</h3>
                <h3>{location}</h3>
            </div>
        </div>
    )
}   

export default ExperienceCard