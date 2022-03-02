import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Form = () => {

    const form = useRef();

        function sendEmail(e) {

            e.preventDefault();

            emailjs.sendForm('service_97ownq9', 'template_xaobwjk', form.current, '03XxCvp41b_iz4--w')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            form.current.reset()
        }

    return (
        <form ref={ form } onSubmit={sendEmail}>
            <div className="mb-3">

                <label htmlFor="InputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" name='user_email' />

            </div>

            <div className="mb-3">
                <label htmlFor="InputFirstName1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="InputFirstName1" name='user_first_name' />
            </div>

            <div className="mb-3">
                <label htmlFor="InputLastName1" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="InputLastname1" name='user_last_name' />
            </div>

            <div className="mb-3">
                <label htmlFor="InputSubject1" className="form-label">Subject</label>
                <input type="text" className="form-control" id="InputSubject1" name='user_subject' />
            </div>

            <div className="mb-3">
                <label htmlFor="InputMessage1" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="InputMessage1" name='user_message' />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
