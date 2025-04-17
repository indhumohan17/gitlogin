import React from 'react';
import IntroImg from"../assets/bootstrap2.jpg";
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
                                <Link to='/' class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' class="nav-link active">About</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Content</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div >
                <img class="img-fluid" style={{ height: 630, width: 4000 }} src={IntroImg} alt="Responsive image" />
            </div>
        </div>
    )
}

export default Home
