import React from 'react';
import Project from './Project';
import projects from '../data.json';

function Portfolio() {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map((project) => (
                    <Project key={project.id}
                        title={project.title}
                        image={project.image}
                        repoUrl={project.repoUrl}
                        liveUrl={project.liveUrl}
                    ></Project>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
