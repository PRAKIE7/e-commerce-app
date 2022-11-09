import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand disabled">E-Commercing</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signin">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
