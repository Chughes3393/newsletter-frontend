import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        setUser(username)

        // we can use useNavigate from RR to redirect our users to a different page/component
        // do not forget the forward slash in front of path in navigate
        navigate('/posts')
    }

    return (
        <form className='mx-auto border p-2 m-2' id='login-form' onSubmit={handleSubmit}>
            <div className="mb-3">

                <label htmlFor="exampleInputUser1" className="form-label">User Name</label>
                <input type="text" 
                className="form-control" 
                id="exampleInputUserName" 
                aria-describedby="UserHelp"
                value={username}
                onChange={handleChange} 
                />
                <div id="userHelp" className="form-text">We'll never share your user name with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" 
                className="form-control" 
                id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
