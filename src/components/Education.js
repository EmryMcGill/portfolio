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
                    desc='I am currently wrapping up my third year pursuing a Computer Science 
                    degree at McGill University while also taking part in a one-semester study abroad
                     program in New Zealand.'
                    date='Sept 2021 - current'
                    img={mcgilllogo} />
            </div>
        </div>
    )
}

export default Education