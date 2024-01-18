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
                    <p className='desc'>{desc}</p>
                </div>
                <img className='photo' src={img}></img>
            </div>
            <h1 className='title'>{title}</h1>
        </div>
        :
        <ProjectModal title={title} img={img} descDetail={descDetail} />
        }
    </div>
    )
}

export default ProjectCard