import React from "react";
import Button from 'react-bootstrap/Button';

function MyInfo() {
    return(
        <div>
            <span>
            <Button variant="link">GitHub</Button>
            </span>
            <span>
            <Button variant="link">LinkedIn</Button>
            </span>
            <span>
            <Button variant="link">Email Me</Button>
            </span>
            
        </div>
    );
}

export default MyInfo;
