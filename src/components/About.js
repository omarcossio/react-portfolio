import React from "react";

function About() {

    return (
        <div className="container ml-5">
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