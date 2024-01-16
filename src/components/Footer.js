
const Footer = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText("emrymcgill@gmail.com");
        alert("Copied to Clipboard");
    }

    return (
        <div className="footer">
            <div contact-container>
                <h2>Contact</h2>
                <button onClick={copyEmail}>emrymcgill@gmail.com</button>
            </div>
        </div>
    )
}

export default Footer