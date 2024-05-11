    import React, { useState } from 'react';
    import { Col } from 'react-bootstrap';// Adjust the path as necessary
    import html from '../../assets/skills/html.png'
    import aws from '../../assets/skills/aws.png'

    import './skills.css'; // Ensure you have this CSS file for styling

    // Dummy data for skills, you can update this based on your actual skills and categories
    const skillsData = [
        { name: 'HTML', category: 'Front-End', imageUrl: html },
        { name: 'CSS', category: 'Front-End', imageUrl: 'path/to/css-image.png' },
        { name: 'JavaScript', category: 'Front-End', imageUrl: 'path/to/javascript-image.png' },
        { name: 'React', category: 'Front-End', imageUrl: 'path/to/react-image.png' },
        { name: 'Flask', category: 'Front-End', imageUrl: 'path/to/nextjs-image.png' },
        { name: 'Node.js', category: 'Back-End', imageUrl: 'path/to/nodejs-image.png' },
        { name: 'Python', category: 'Back-End', imageUrl: 'path/to/express-image.png' },
        { name: 'Java', category: 'Back-End', imageUrl: 'path/to/mongodb-image.png' },
        { name: 'AWS', category: 'Misc.', imageUrl: aws },
        { name: 'Django', category: 'Misc.', imageUrl: 'path/to/redux-image.png' },
    ];


function Skills() {
    const [filters, setFilters] = useState({
        'Front-End': false,
        'Back-End': false,
        'Misc.': false
    });

    const handleFilterChange = (category) => {
        setFilters(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const filteredSkills = skillsData.filter(skill =>
        filters['Front-End'] && skill.category === 'Front-End' ||
        filters['Back-End'] && skill.category === 'Back-End' ||
        filters['Misc.'] && skill.category === 'Misc.' ||
        (!filters['Front-End'] && !filters['Back-End'] && !filters['Misc.'])
    );

    return (
        <Col md={6} className="skills-section d-flex flex-column align-items-center justify-content-start p-3">
            <div className="filters d-flex justify-content-center gap-3">
                <label>
                    <input type="checkbox" checked={filters['Front-End']} onChange={() => handleFilterChange('Front-End')} /> Front-End
                </label>
                <label>
                    <input type="checkbox" checked={filters['Back-End']} onChange={() => handleFilterChange('Back-End')} /> Back-End
                </label>
                <label>
                    <input type="checkbox" checked={filters['Misc.']} onChange={() => handleFilterChange('Misc.')} /> Misc.
                </label>
            </div>
            <div className="skills-container d-flex flex-wrap justify-content-center gap-3 overflow-auto">
                {filteredSkills.map(skill => (
                    <div key={skill.name} className="skill-card">
                        <img src={skill.imageUrl} alt={skill.name} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </Col>
    );


}

export default Skills;
