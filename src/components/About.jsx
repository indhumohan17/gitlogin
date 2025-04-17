import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return (
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
            <div class="section_all bg-">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title_all text-center">
                                <h3 class="font-weight-bold">Welcome To <span class="text-custom">Lorem Ipsum</span></h3>
                                <p class="section_subtitle mx-auto text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
