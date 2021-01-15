import React, { Component } from "react";
import { Card } from "react-bootstrap";

const styles = {
    card: {
        margin: 20,
        background: "#e8eaf6",
        // height: 400,
        // width: 400,
    },

};

const Project = props=>{
        return (
            <div >
                <div className="card mb-4" style={styles.card}>
                    <div className="card-body">
                    <h5 className="card-title" style={styles.heading}>{props.title}</h5>
                    </div>

                        <img src={props.image} className="card-img-bottom" alt={props.title}></img>
                        <a href={props.repoUrl} target="_blank" className="card-link mb-1">Repo Link</a>
                        <a href={props.liveUrl} target="_blank" className="card-link">Live Link</a>
                </div>
            </div>
        );
}

export default Project;