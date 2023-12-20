import ErrorIcon from '../../assets/icon-error.svg?react'
import Counter from '../Counter'

import { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsError(false)

        const emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        if(email === '' || !emailRegExp.test(email)){
            setIsError(true)
        }
    }

    return ( 
        <div className="contact-form">
            <div className="container">
                <Counter/>
                <h2>Stay up-to-date with what we're doing</h2>
                <form onSubmit={handleSubmit} className={isError ? 'error' : ''}>
                    <div className="contact-form__input">
                        <input
                         type="text"
                         placeholder="Enter your email address"
                         value={email}
                         onChange={(e) => setEmail(e.currentTarget.value)}
                         id="email"
                         autoComplete="email"
                        />
                        {isError && <>
                            <ErrorIcon/>
                            <p>Whoops, make sure it's an email</p>
                        </>}
                    </div>
                    <button className="btn btn-special" type="submit">Contact Us</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;