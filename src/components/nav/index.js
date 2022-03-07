import { Link } from "react-router-dom";
import { useContext } from 'react'
import UserContext from "../../contexts/UserContext";

const Nav = () => {

    const user = useContext(UserContext)

    return (

        <>
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Jumbalaya</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="Contact">Contact</Link>
                            </li>

                            {
                                !user ?

                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>

                                    :

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Admin
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="subscribers">Subscribers</Link>

                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="posts">Posts</Link>
                                        </div>
                                    </li>
                            }
                        </ul>
                    </div>

                </nav>
            </div>
        </>
    );
}

export default Nav;
