import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setMessage('')

        emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_ID,
        })
        .then(
            () => {
            console.log('email sent');
            },
            (error) => {
            console.log('email failed...', error.text);
            },
        );
    };


    return (
        <div className="contact">
            <h1 className="section-title">Contact</h1>
            <form ref={form} className="contact" onSubmit={handleSubmit}>
                <div className="name-container">
                    <input 
                    type="text"
                    placeholder='name'
                    className="name"
                    name="user_name"
                    required
                    onChange={(target) => {setName(target.value)}}
                    value={name}
                    />
                </div>
                <div className="email-container">
                    <input 
                    type="email"
                    placeholder="email"
                    className="email"
                    name="user_email"
                    required
                    onChange={(target) => {setEmail(target.value)}}
                    value={email}
                    />
                </div>
                <div className="message-container">
                    <textarea 
                    placeholder="your messsage"
                    className="message"
                    name="message"
                    required
                    onChange={(target) => {setMessage(target.value)}}
                    value={message}
                    />
                </div>
                <div className="submit-button-container">
                    <button className="submit-button" type="submit" value="Send">
                    SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact