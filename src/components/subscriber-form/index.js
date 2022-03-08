import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const SubscriberF = ({ fetchSubscribers, editForm, subscriberToEdit, setEditForm }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newSubscriber = {
            firstname: firstName,
            lastname: lastName,
            email: email
        }

        try {
            if (editForm) {

                const response = await axios.put(`https://newsletter-appp.herokuapp.com/api/v1/newsletter/subscriber/${subscriberToEdit.id}`, newSubscriber)
                console.log(response)

                if (response.status === 200) {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setEditForm(false)
                }

            } else {
                const response = await axios.post(`https://newsletter-appp.herokuapp.com/api/v1/newsletter/addsubscriber`, newSubscriber)

                if (response.status === 200) {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                }
            }

            fetchSubscribers()
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="container mt-4 mb-3" id='sub-form-div'>
            <form className='row g-2' onSubmit={handleSubmit}>

                <div className="col-md-6">
                    <label htmlFor="exampleInputTitle" className="form-label">First Name:</label>
                    <input type="text"
                        className="form-control"
                        id="exampleInputTitle1"
                        aria-describedby="TitleHelp"
                        name='first-name'
                        placeholder={subscriberToEdit.firstname}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="exampleInputSubtitle1" className="form-label">Last Name:</label>
                    <input type="text"
                        className="form-control"
                        id="exampleInputSubtitle1"
                        name='last-name'
                        placeholder={subscriberToEdit.lastname}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />

                </div>

                <div className="col-md-8" id='sub-email-div'>
                    <label htmlFor="exampleEmail1" className="form-label">Email:</label>
                    <input type="text"
                        className="form-control"
                        id="exampleEmail1"
                        name='email'
                        placeholder={subscriberToEdit.email}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div id='button-div1'>
                    <button type="submit" className="btn btn-primary">{editForm ? "Add Subscriber" : "Add"}</button>
                </div>

            </form>

        </div>
    );
}

export default SubscriberF;
