import mcgilllogo from '../mcgilllogo.jpg'

const EducationCard = ({ school, program, desc, date, location }) => {
    return (
        <div className="education-card">
            <div className="info-container">
                <div className='title-container'>
                    <h1 className="school">{school}</h1>
                    <h2 className="program">{program}</h2>
                    <p className="desc">{desc}</p>
                </div>
                <div className='date-container'>
                    <h3 className="date">{date}</h3>
                </div>
            </div>
            <img src={mcgilllogo}></img>
    </div>
    )
}

export default EducationCard