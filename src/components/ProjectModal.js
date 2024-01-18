

const ProjectModal = ({ title, img, descDetail }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="row1">
                    <h1 className="title">{title}</h1>
                    <div className="btn-container">
                        <div className="action-btns">
                            <button className="demo-btn">Demo</button>
                            <button className="git-btn">Github</button>
                        </div>
                        <button className="close-btn">X</button>
                    </div>
                </div>
                <div className="row2">
                    <img className='photo' src={img}></img>
                    <p className='desc'>{descDetail}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal