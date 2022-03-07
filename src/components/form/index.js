import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './styles.css'

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
        <div className="container mt-4">

            <form className='row g-2' ref={form} onSubmit={sendEmail}>

                <div className="col-md-6">
                    <label htmlFor="InputFirstName1" id='fname-label' className="form-label"> First Name: </label>
                    <input type="text" className="form-control" id="InputFirstName1" name='user_first_name' required/>
                </div>

                <div className="col-md-6">
                    <label htmlFor="InputLastName1" id='lname-label ' className="form-label">Last Name: </label>
                    <input className="form-control" id="InputLastname1" name='user_last_name' type="text" required></input>
                </div>


                <div className='col-md-8' id='input-email' className="mb-3">

                    <label htmlFor="InputEmail1" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" name='user_email' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="InputSubject1" className="form-label">Subject:</label>
                    <input type="text" className="form-control" id="InputSubject1" name='user_subject' required />
                </div>

                <div className="mb-3">
                    <label htmlFor="InputMessage1" className="form-label">Message:</label>
                    <textarea type="text" className="form-control" id="InputMessage1" name='user_message' required/>
                </div>

                <div id='button-div'><button type="submit" className="btn btn-primary w-25 p-3">Submit</button></div>
            </form>
        </div>
    );
}

export default Form;






