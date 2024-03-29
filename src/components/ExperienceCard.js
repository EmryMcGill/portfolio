const ExperienceCard = ({ company, position, desc, date, location, img }) => {
    return (
        <div className="experience-card">
            <div className="info-container">
                <div className='title-container'>
                    <div className="sub-title">{position}</div>
                    <div className='company-container'>
                        <h2 className="company">{company}</h2>
                        <h2 className='location'>{location}</h2>
                    </div>
                    <p className="desc">{desc}</p>
                </div>
                <div className='date-container'>
                    <h3 className="date">{date}</h3>
                </div>
            </div>
            <img src={img} alt=''></img>
        </div>
    )
}   

export default ExperienceCard