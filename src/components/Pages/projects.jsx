import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from '../Objects/theme.js'; // Import your custom theme
import "./projects.css";
import MediaCard from '../Objects/cards.jsx';
import Charon from '../../assets/ii32jgt.png';

// Example project data array with 'learnMoreText' included
const projectsData = [
    { id: 1, title: 'Project A', description: 'Description of Project A, Description of Project A, Description of Project A, Description of Project A',
        image: Charon, technology: 'hello000, hello000, hello000, hello000' },
    { id: 2, title: 'Project B', description: 'Description of Project A, Description of Project A, Description of Project A, Description of Project A\',\n' +
            '        image: Charon, technology: \'hello000, hello000, hello000, hello000', image: Charon, technology: 'hellooo' },
    { id: 3, title: 'Project C', description: 'Description of Project C Description of Project A, Description of Project A, Description of Project A, Description of Project A' +
            'Description of Project A, Description of Project A, Description of Project A, Description of Project A', image: Charon, technology: 'hello' },
    { id: 4, title: 'Project D', description: 'Description of Project D Description of Project A, Description of Project A, Description of Project A, Description of Project A' +
            'Description of Project A, Description of Project A, Description of Project A, Description of Project A', image: Charon, technology: 'hello' },
    { id: 5, title: 'Project E', description: 'Description of Project E Description of Project A, Description of Project A, Description of Project A, Description of Project A' +
            'Description of Project A, Description of Project A, Description of Project A, Description of Project A', image: Charon, technology: 'hello' }

    // Add more projects as needed
];

function Projects() {
    return (
        <ThemeProvider theme={theme}> {/* Wrap the entire component with ThemeProvider */}
            <div id="projects" className="projects-container">
                <h1 className="title">Projects</h1>
                <div className="card-container">
                    {projectsData.map((project) => (
                        <MediaCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technology={project.technology}
                        />
                    ))}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Projects;
