

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact">
            <h1 className="title">Contact</h1>
            <form className="contact" onSubmit={handleSubmit}>
                <div className="name-container">
                    <input 
                    type="text"
                    placeholder="name"
                    className="name"
                    name="name"
                    required
                    />
                </div>
                <div className="email-container">
                    <input 
                    type="email"
                    placeholder="email"
                    className="email"
                    name="email"
                    required
                    />
                </div>
                <div className="message-container">
                    <textarea 
                    placeholder="your messsage"
                    className="message"
                    name="message"
                    required
                    />
                </div>
                <div className="submit-button-container">
                    <button className="submit-button" type="submit">
                    SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact