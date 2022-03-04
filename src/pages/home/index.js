import Signup from '../../components/signup-form'
import { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'

const Home = () => {

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

    const addSubscriber = async () => {
        try {
            const response = await axios.post(`http://localhost:8082/api/v1/newsletter/addsubscriber/`)
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


        <div>
            <p>About:</p>
            <p>Jumbalaya is an email newsletter service featuring the writings of Chris Hues.</p>
            <p>Sign up to get it in your inbox from time to time. </p>

            <Signup
                fetchSubscribers={fetchSubscribers}
                editForm={editForm}
                subscriberToEdit={subscriberToEdit}
            />
        </div>
    );
}

export default Home;
