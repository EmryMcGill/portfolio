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
                company='Columbia Basin Trust,'
                location='Castlegar, BC' 
                position='Systems Analyst Intern'
                desc='Enhanced efficiency within the broadband team by analyzing 
                workflows and automating tasks. Utilized Microsoft Power Automate to 
                streamline invoice processing, identify invoice types, organize them 
                accurately, and notify the relevant approver via email.'
                date='May 2022 - August 2022'
                img={cbt} />
                <ExperienceCard 
                company='Greater Trail Community Justice Program Society,'
                location='Trail, BC'  
                position='Web Design (volunteer)'
                desc='Planned and created website design and navigation. Worked in 
                collaboration with the society’s board, including members from the 
                community, RCMP, and local government officials. Incorporated 
                necessary edits and accommodated
                technical concerns.'
                date='Jan 2020 - June 2020'
                img={justice} />
                <ExperienceCard 
                company='Rossland Public Library'
                location='Rossland, BC'  
                position='Youth Tech Clerk'
                desc='Assisted and mentored patrons with their technological issues, 
                such as repairing computers and setting up e-readers. Listened to 
                concerns and answered questions.'
                date='Feb 2019 - May 2019'
                img={rossland} />
                <ExperienceCard 
                company='Mountain Nugget Chocolate Store'
                location='Rossland, BC'  
                position='Retail and Kitchen'
                desc='Collaborated effectively within a dynamic team environment to 
                deliver exceptional customer service. Responsibilities included
                processing payments, crafting high-quality chocolates and beverages 
                and training new staff. As my first job this invaluable experience 
                served as my introduction to professional life, instilling essential 
                skills in teamwork, time management, and maintaining high production 
                standards to consistently exceed customer expectations.'
                date='Oct 2018 - June 2021'
                img={nugget} />
                <ExperienceCard 
                company='Teck Resources,'
                location='Trail, BC'  
                position='Cathode Utility'
                desc='Contributed to a small team in zinc electrolytic operations. 
                Managed cathode maintenance, operated forklifts, cranes, and hoists 
                proficiently, and seamlessly stepping in to cover other operator 
                responsibilities as required, always with a strong commitment to 
                ensuring a safe working environment for myself and my team.'
                date='May 2023 - August 2023'
                img={Tecklogo} />
            </div>
        </div>
    )
}

export default Experience