import React from "react";
import Button from 'react-bootstrap/Button';

function MyInfo() {
    return (

        <div className="text-black">
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-1">
                            <a href="https://github.com/omarcossio"
                                target="_blank">
                                <img src="githubicon.png" width="100%"></img>
                            </a>
                        </div>
                        <div className="col-1">
                            <a href="https://www.linkedin.com/in/omar-cossio-7b332a12b/"
                                target="_blank">
                                <img src="linkedinIcon.png" width="100%"></img>
                            </a>
                        </div>
                        <div className="col-1">
                            <a href="omcResume2020.pdf"
                                target="_blank">
                                <img src="resumeIcon.png" width="100%"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-3">
                        <form>
                            <div className="container col-md-10 pr-5">
                                <div className="form-group">
                                    <label for="Name">Name</label>
                                    <input type="name" className="form-control" id="exampleInputEmail1" required="" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" />
                                </div>
                                <div className="form-group">
                                    <label for="Message">Message</label>
                                    <textarea type="text" rows="5" className="form-control" id="exampleText" required=""></textarea>
                                </div>
                                <div>
                                    <a href={"mailto:omarcossio119mce@gmail.com"} className="btn btn-primary"> Submit </a>
                                  

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            </div>
           
        </div>
    );
}

export default MyInfo;

