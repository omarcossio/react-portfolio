import React, { Component } from "react";
//import x from '../Images/pwGenerator.png'
import { Card } from "react-bootstrap";

const styles = {
    x: {
        width:20
    },
    card: {
        margin: 20,
        background: "#e8eaf6"
    },
    heading: {
        background: "#3f51b5",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px"
    },
    content: {
        padding: 20
    }
};

class Project extends Component {
    state = {}
    render() {
        return (
            <div >
                <div style={styles.card}>
                    <div style={styles.heading}>{this.props.title}</div>
                    <div style={styles.content}>
                        <img src={this.props.image} alt={this.props.title}></img>
                        <a href={this.props.repoUrl}><p>Repo Link</p></a>
                        <a href={this.props.liveUrl}><p>Live Link</p></a>
                    </div>
                </div>

                {/* <h2>{this.props.title}</h2>
                <img src={this.props.image} alt={this.props.title}></img>
                <a href={this.props.repoUrl}><p>Repo Link</p></a>
                <a href={this.props.liveUrl}><p>Live Link</p></a> */}

            </div>
        );
    }
}

export default Project;