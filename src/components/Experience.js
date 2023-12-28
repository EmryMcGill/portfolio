import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    return (
        <div className="experience">
            <h1 className="title">Experience</h1>
            <div className="experience-container">
                <ExperienceCard 
                company='Columbia Basin Trust' 
                position='Systems Analyst Intern'
                desc='a sample description for this job bla bla do do'
                date='2022-2023' />
            </div>
        </div>
    )
}

export default Experience