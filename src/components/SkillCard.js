import { useState } from "react" 


const SkillCard = ({ desc, img }) => {

    const [descToggle, setDescToggle] = useState(false);

    const toggleDesc = () => {
        setDescToggle(!descToggle);
    }

    return(
        <div className="skill-card" onClick={toggleDesc}>
            <img className='photo' src={img}></img>            
            {descToggle ? <div className='desc'>{desc}</div> : <></>}
        </div>
    )
}

export default SkillCard