import React from "react";

function About() {

    return (
        <div className="container ml-5 mt-5">
            <div className="row">
                <div className="col-9">
                    <div className="bg-secondary text-white">
                        <h2>About Omar</h2>
                        <hr></hr>

                        <section className="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 pb-3">
                                        <div className="image-wrapper float-left pr-3">
                                            <img scr="myPhoto.jpeg" alt="Omar's Profile Photo"></img>
                                        </div>
                                        <div className="content-wrapper">

                                            <p> My name is Omar Cossio. I am originally from Mexico City, Mexico,
                                            but grew up in Asheboro, NC. I moved to Charlotte, NC in 2011, and love it.
                                            </p>
                                            <div>
                                                <p>
                                                    I graduated from Johnson C. Smith University in 2016 and currently I am studying at The Coding Bootcamp at UNC Charlotte, where I'm working to become a full-stack developer. 
                                                </p>
                                                <p>
                                                    Click on the "Portfolio" tab to take a look at some of my projects and join me as I continue to add to my portfolio. 
                                                </p>

                                                <h5>A Few Reasons I've Enjoyed Coding</h5>
                                        <p>
                                            <ul>
                                                <li>I enjoy creating</li>
                                                <li>It's ever changing</li>
                                                <li>I'm a life-long learner</li>
                                                <li>It can be like solving a puzzle</li>   
                                            </ul>
                                        </p>

                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default About;