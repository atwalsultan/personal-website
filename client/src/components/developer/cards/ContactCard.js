import React, { useState, useEffect } from "react";

const ContactCard = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 100)
    }, [])

    return (
        <div className={`contact-card${hidden ? " hidden" : ""}`}>
            <form className="contact-form" id="developerContact" action="/developer/contact" method="POST">
                <div className="first-row">
                    <div className="label-input">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                        />
                    </div>

                    <div className="label-input">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                        />
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div className="label-input">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactCard
