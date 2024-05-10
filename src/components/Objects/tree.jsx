import React, { useState } from 'react';

const TreePositions = [
    { left: '0%', top: '50%' }, // Bottom left
    { right: '0%', top: '50%' }  // Middle right
];

const TreeComponent = () => {
    // Single state to manage visibility of all trees
    const [visible, setVisible] = useState(true);

    return (
        <div>
            {visible && TreePositions.map((pos, index) => (
                <div className="tree" style={pos} key={index}></div>
            ))}
        </div>
    );
};

export default TreeComponent;
