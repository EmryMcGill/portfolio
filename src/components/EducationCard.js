
const EducationCard = ({ school, program, desc, date, location, img }) => {
    return (
        <div className="education-card">
            <div className="info-container">
                <div className='title-container'>
                    <div className="sub-title">{school}</div>
                    <h2 className="program">{program}</h2>
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

export default EducationCard