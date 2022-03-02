import { Link } from "react-router-dom";
import { useContext } from 'react'

import UserContext from "../../contexts/UserContext";

const Nav = () => {

    const user = useContext(UserContext)

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Jumbalaya</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {
                            !user ?

                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>

                                :

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="posts">Posts</Link>
                                </li>
                        }


                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="subscribers">Subscribers</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="Contact">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
