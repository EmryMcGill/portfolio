
const Footer = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText("emrymcgill@gmail.com");
        alert("Copied to Clipboard");
    }

    return (
        <div className="footer">
            <div className="contact-container">
                <h2>Contact</h2>
                <button className="email-btn" onClick={copyEmail}>email
                </button>
                <a className="git-btn"target="_blank"  href="https://www.linkedin.com/in/emry-mcgill-ba8921238">LinkedIn</a>
                <a className="git-btn"target="_blank"  href="https://github.com/emrymcgill">Github</a>
            </div>
        </div>
    )
}

export default Footer