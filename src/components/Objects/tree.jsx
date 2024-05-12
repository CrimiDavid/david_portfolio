import React from 'react';

const TreePositions = [
    { left: '0%', bottom: '10px' }, // Near bottom-left
    { right: '0%', bottom: '10px' }  // Near bottom-right
];

const TreeComponent = ({ visible }) => {
    // Updated container style
    const containerStyle = {
        position: 'relative', // Use fixed to keep it in the viewport or 'absolute' if relative to a parent container
        pointerEvents: 'none', // Ensure clicks pass through to content below
        zIndex: '-1',          // Keep it behind all other content
        clear: 'both'
    };

    return (
        <div style={containerStyle}>
            {visible && TreePositions.map((pos, index) => (
                <div className="tree" style={{ position: 'absolute', ...pos }} key={index}></div>
            ))}
        </div>
    );
};

export default TreeComponent;
