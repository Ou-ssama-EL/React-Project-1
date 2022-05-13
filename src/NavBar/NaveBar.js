import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {

    return (
        <div>
            
            <div className="navbar">

                <div className="container">

                    <div className="logo">
                        <h2 className="logo-text">Ultra Profile</h2>
                    </div>
                    {/* <!-- ./logo --> */}

                        <ul className="ul-list">
                        <li className="list-item"><Link to='/React-Project-1/'>Home</Link></li>
                            <li className="list-item"><a href="#">Work</a></li>
                            <li className="list-item"><a href="#">Portfolio</a></li>
                            <li className="list-item"><a href="#">Resume</a></li>
                            <li className="list-item"><a href="#">About</a></li>
                        <li className="list-item"><Link to="/React-Project-1/contact/">Contact</Link></li>
                        </ul>
                        {/* <!-- ./ul-list --> */}

                </div>
                {/* <!-- ./container --> */}

            </div>
            {/* <!-- ./navbar --> */}
        </div>
    )
}

export default NavBar;
