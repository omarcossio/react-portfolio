import React, { Component } from "react";
import { Card } from "react-bootstrap";

const styles = {
    x: {
        width:20
    },
    card: {
        margin: 20,
        background: "#e8eaf6",
        height: 400,
        width: 400,
    },
    // heading: {
    //     background: "#3f51b5",
    //     minHeight: 50,
    //     lineHeight: 3.5,
    //     fontSize: "1.2rem",
    //     color: "white",
    //     padding: "0 20px",
    //     width: "100%"
    // },
    // content: {
    //     padding: 20
    // }
};

const Project = props=>{
        return (
            <div >
                <div className="card mb-4" style={styles.card}>
                    <div className="card-body">
                    <h5 className="card-title" style={styles.heading}>{props.title}</h5>
                    </div>

                        <img src={props.image} className="card-img-bottom" alt={props.title}></img>
                        <a href={props.repoUrl} className="card-link">Repo Link</a>
                        <a href={props.liveUrl} className="card-link">Live Link</a>
                </div>
            </div>
        );
}

export default Project;