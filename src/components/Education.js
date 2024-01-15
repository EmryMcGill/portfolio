import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <div className="education">
            <h1 className="title">Education</h1>
            <div className="education-container">
            <EducationCard 
                    school='McGill University' 
                    program='B.Sc Major Computer Science'
                    desc='I am currently in my third year of 
                    Computer Science at McGill University'
                    date='2021 - current' />
            </div>
        </div>
    )
}

export default Education