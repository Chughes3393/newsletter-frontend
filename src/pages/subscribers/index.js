import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SubscriberF from '../../components/subscriber-form';

const Subscribers = () => {

    const [subscribers, setSubscribers] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [subscriberToEdit, setSubscriberToEdit] = useState({})

    useEffect(() => {
        fetchSubscribers()
    }, [])

    const fetchSubscribers = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/newsletter/allsubscribers')

            // console.log(response)
            setSubscribers(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const deleteSubscribers = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/v1/newsletter/subscriber/${id}`)
            console.log(response)
            fetchSubscribers()
        } catch (err) {
            console.log(err)
        }
    }

    const handleEdit = (subscribers) => {
        setEditForm(true)
        setSubscriberToEdit(subscribers)
    }

    return (
        <>
            <SubscriberF
                fetchSubscribers={fetchSubscribers}
                editForm={editForm}
                subscriberToEdit={subscriberToEdit} 
                />

            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {subscribers.map(subscribers => {
                        return (
                            <tr key={subscribers.id}>
                                <th scope="row">{subscribers.id}</th>
                                <td data-label="First Name">{subscribers.firstname}</td>
                                <td data-label="Last Name">{subscribers.lastname}</td>
                                <td data-label="Email">{subscribers.email}</td>

                                <td data-label="Edit">
                                    <i className="bi bi-trash" onClick={() => deleteSubscribers(subscribers.id)} ></i>

                                    <i className="bi bi-pen" 
                                    onClick={() => handleEdit(subscribers)}
                                    ></i>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
}

export default Subscribers;
