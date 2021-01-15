import React from 'react';
import Project from './Project';
import projects from '../data.json';

function Portfolio() {
    return (
        <div className="mt-5" id="portfolio">
            <h1>Portfolio</h1>
            <div className="row">
                {projects.map((project) => (
                    <div className="col-4">
                    <Project key={project.id}
                        title={project.title}
                        image={project.image}
                        repoUrl={project.repoUrl}
                        liveUrl={project.liveUrl}
                    ></Project>
                    </div>
                ))}
            </div>




            
            
        </div>
    );
}

export default Portfolio;
