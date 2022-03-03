import React from 'react';

const Home = () => {
    return (
        <div>
            <p>Jumbalaya is an email newsletter service featuring the writings of Chris Hues.</p>
            <p>Sign up to get it in your inbox from time to time. </p>

            <form className='mx-auto border p-2 m-2' id='signup-form' >
            <div className="mb-3">

                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" 
                className="form-control" 
                id="exampleInputUserEmail" 
                aria-describedby="UserHelp"
                />
                <div id="userHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        </div>
    );
}

export default Home;
