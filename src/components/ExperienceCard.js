import cbt from '../cbt.png'

const ExperienceCard = ({ company, position, desc, date, location }) => {
    return (
        <div className="experience-card">
            
            <div className="info-container">
                <div className='title-container'>
                    <h1 className="position">{position}</h1>
                    <h2 className="company">{company}</h2>
                    <p className="desc">{desc}</p>
                </div>
                <div className='date-container'>
                    <h3 className="date">{date}</h3>
                    <h3 className="location">{location}</h3>
                </div>
            </div>
            <img src={cbt}></img>
        </div>
    )
}   

export default ExperienceCard