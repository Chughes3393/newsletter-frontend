import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Home</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="posts">Posts</Link>

                        </li>
                        <li className="nav-item">

                            <Link className="nav-link" to="subscribers">Subscribers</Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="Contact">Contact</Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="about">About</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
