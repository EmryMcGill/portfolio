const SkillCard = ({ desc, img }) => {
    return(
        <div className="skill-card">
            <div className='img-container'>
                <div className='desc-container'>
                    <p className='desc'>{desc}</p>
                </div>
                <img className='photo' src={img}></img>
            </div>
        </div>
    )
}

export default SkillCard