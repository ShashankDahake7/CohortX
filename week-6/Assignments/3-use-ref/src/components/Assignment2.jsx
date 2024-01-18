import React, { useState, useRef, useCallback } from 'react';

export function Assignment2() {
    const [, forceRender] = useState(0);

    const numberOfTimeReRendered = useRef(0);

    const handleReRender = useCallback(() => {
        // Update state to force re-render
        forceRender(Math.random());
    }, []);

    numberOfTimeReRendered.current = numberOfTimeReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimeReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};