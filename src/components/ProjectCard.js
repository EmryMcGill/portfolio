import { useState } from 'react'

const ProjectCard = ({title, desc, img}) => {

    return (
        <div className="project-card">
            <div className='img-container'>
                <div className='desc-container'>
                    <p className='desc'>{desc}</p>
                </div>
                
                <img className='photo' src={img}></img>
            </div>

            <div className='title-container'>
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    )
}

export default ProjectCard