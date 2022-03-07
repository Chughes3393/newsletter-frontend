import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const Signup = ({ fetchSubscribers, editForm, subscriberToEdit, addSubscribers }) => {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newSubscriber = {

            email: email
        }

        try {
            if (editForm) {

                const response = await axios.put(`http://localhost:8081/api/v1/newsletter/subscriber/${subscriberToEdit.id}`, newSubscriber)
                console.log(response)
            } else {
                const response = await axios.post(`http://localhost:8081/api/v1/newsletter/addsubscriber`, newSubscriber)

                if (response.status === 200) {
                    setEmail('')
                }
            }

            fetchSubscribers()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id='form-div'>
            <form className='mx-auto border p-2 m-2' id='signup-form' onSubmit={handleSubmit}>

                <div id='signup-form' className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label" >Enter Your Email:</label>
                    <input type="email"
                        className="form-control"
                        // id='signup-input'
                        id="exampleInputUserEmail"
                        aria-describedby="UserHelp"
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />

                    <div id="userHelp" className="form-text">We'll never share your email with anyone else.</div>

                </div>

                <button type="submit" className="btn btn-primary" onClick={() => addSubscribers(addSubscribers)}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
