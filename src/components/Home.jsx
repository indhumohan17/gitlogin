import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div className="container-xl">
                        <span class="navbar mb-0 h1 display-6">Dark</span>
                        <ul class="nav justify-content-center h4">
                            <li class="nav-item">
                                <Link to='/gitlogin' class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/gitlogin/about' class="nav-link active">About</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Content</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div>
                <div class="container py-4">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="networking">
                                <h2 class="display-5 heading">Networking <span class="brand-name"> solutions </span> for
                                    worldwide communication</h2>
                                <p class="text-muted">We're a company that focuses on establishing long-term relationships with customers.</p>
                                <button type="button" id="change-lang" class="btn btn-primary rounded-pill px-4 py-3">Explore Now</button>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="img">
                                <img src="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-6375.jpg?w=740&t=st=1666852595~exp=1666853195~hmac=3a207fff771155f287a29ed1dabc6ab37e6bdb5141a29c56711b772023ff9865" alt="communication" class="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
