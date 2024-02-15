import ExperienceCard from "./ExperienceCard"
import Tecklogo from '../photos/tecklogo.png'
import cbt from '../photos/cbt.png'
import justice from '../photos/gtjs.jpeg'
import rossland from '../photos/rossland_logo.png'
import nugget from '../photos/nugget.jpg'


const Experience = () => {
    return (
        <div className="experience">
            <h1 className="section-title">Experience</h1>
            <div className="experience-container">
                <ExperienceCard 
                company='Teck Resources,'
                location='Trail, BC'  
                position='Cathode Utility'
                desc='a sample description for this job bla bla do do'
                date='May 2023 - August 2023'
                img={Tecklogo} />
                <ExperienceCard 
                company='Columbia Basin Trust,'
                location='Castlegar, BC' 
                position='Systems Analyst Intern'
                desc='Assisted the broadband team with administrative tasks. Automated tasks, Processed invoices, worked in GIS
                software to create interactive maps of the broadband network, and composed business emails.'
                date='May 2022 - August 2022'
                img={cbt} />
                <ExperienceCard 
                company='Greater Trail Community Justice Program Society,'
                location='Trail, BC'  
                position='Web Design (volunteer)'
                desc='Planned and created site design and navigation. Worked in collaboration with the society’s board, including members from the community, RCMP, and local government officials. Incorporated necessary edits and accommodated
                technical concerns.'
                date='Jan 2020 - June 2020'
                img={justice} />
                <ExperienceCard 
                company='Rossland Public Library'
                location='Rossland, BC'  
                position='Youth Tech Clerk'
                desc='Assisted and mentored patrons with their technological issues. Repaired computers and setting up e-readers.
                Listened to concerns and answered questions.'
                date='Feb 2019 - May 2019'
                img={rossland} />
                <ExperienceCard 
                company='Mountain Nugget Chocolate Store'
                location='Rossland, BC'  
                position='Retail and Kitchen'
                desc='Worked in a team setting, provided customer service, handled cash, processed payments, produced chocolates
                and drinks, cleaned work areas, and trained other staff members.'
                date='Oct 2018 - June 2021'
                img={nugget} />
            </div>
        </div>
    )
}

export default Experience