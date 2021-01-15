import React from "react";

const styles = {
    rounded: {
    }
};

function About() {

    return (
        <div className="container ml-5 mt-5">
            <div className="row">
                <div className="col-12 float-start">
                    <img src="myPhoto.png" className="rounded float-left mr-4" alt="Omar's Profile Photo" width="30%"></img>
                    <div>
                        <p> My name is Omar Cossio. I am originally from Mexico City, Mexico,
                        but grew up in Asheboro, NC. I moved to Charlotte, NC in 2011, and love it.
                    </p>

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


    );
}

export default About;