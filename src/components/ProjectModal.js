import { IoClose } from "react-icons/io5";

const ProjectModal = ({ title, img, descDetail, onClose }) => {

    

    return (
        <div className="modal" onClick={onClose}>
            <div 
            className="modal-content" 
            onClick={e => e.stopPropagation()}>
                <div className="row1">
                    <h1 className="title">{title}</h1>
                    <div className="btn-container">
                        <div className="action-btns">
                            <button>Demo</button>
                            <button>Github</button>
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