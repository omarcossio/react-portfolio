import React from "react";
import MyInfo from "./MyInfo";

function Contact() {

    return (
        <div className="container mt-5 ml-5">
            <div className="row">
                <div className="bg-secondary text-black">
                    <h2 className="card-title">Contact Me Here!</h2>

                    <div className="card" id="contact">
                        <div className="row">
                            <div className="card-body">
                                <MyInfo className="card-link" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;

{/* 
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}
