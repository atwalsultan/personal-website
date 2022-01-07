import React, { useState, useEffect } from "react";

const ContactCard = () => {
    const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
    const [hidden, setHidden] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

		const data = { firstName, lastName, email, message };

		// Clear form
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
    }

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 100)
    }, [])

    return (
        <div className={`contact-card${hidden ? " hidden" : ""}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="first-row">
                    <div className="label-input">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            required
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            required
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div className="label-input">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactCard
