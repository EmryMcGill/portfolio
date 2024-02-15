import EducationCard from "./EducationCard"
import mcgilllogo from '../photos/mcgilllogo.jpg'


const Education = () => {
    return (
        <div className="education">
            <h1 className="section-title">Education</h1>
            <div className="education-container">
            <EducationCard 
                    school='McGill University' 
                    program='B.Sc Major Computer Science'
                    desc='I am currently in my third year of 
                    Computer Science at McGill University.'
                    date='Sept 2021 - current'
                    img={mcgilllogo} />
            </div>
        </div>
    )
}

export default Education