import { useState } from 'react'
import ProjectModal from './ProjectModal';

const ProjectCard = ({title, desc, descDetail, img}) => {

    const [details, setDetails] = useState(false);

    const handleClick = () => {
        setDetails(!details);
    }

    return (
        <div>
        {!details ? 
        <div className="project-card" onClick={handleClick}>
            <div className='img-container'>
                <div className='desc-container'>
                    <div className='desc'>{desc}</div>
                </div>
                <img className='photo' src={img}></img>
            </div>
            <div className='sub-title'>{title}</div>
        </div>
        :
        <ProjectModal 
        title={title} 
        img={img} 
        descDetail={descDetail}
        onClose={() => setDetails(false)} />
        }
    </div>
    )
}

export default ProjectCard