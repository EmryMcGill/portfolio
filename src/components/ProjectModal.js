import { IoClose } from "react-icons/io5";

const ProjectModal = ({ title, img, descDetail, onClose, git, demo, gitLink, demoLink }) => {

    

    return (
        <div className="modal" onClick={onClose}>
            <div 
            className="modal-content" 
            onClick={e => e.stopPropagation()}>
                <div className="row1">
                    <h1 className="title">{title}</h1>
                    <div className="btn-container">
                        <div className="action-btns">
                            {demo ? 
                            <a target="_blank"  href={demoLink}>
                                <button>Demo</button>
                            </a>
                            :
                            <></>
                            }
                            {git ?
                            <a target="_blank"  href={gitLink}>
                                <button>Github</button>
                            </a>
                            :
                            <></>
                            }
                        </div>
                        <IoClose
                        className="close-btn" 
                        onClick={onClose} />
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