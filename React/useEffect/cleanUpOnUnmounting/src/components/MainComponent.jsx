import React, { useState } from 'react';
import TimeDisplay from './TimeDisplay';

const MainComponent = () => {
    const [showTime, setShowTime] = useState(true);

    return (
        <div>
            <h1>Welcome to My App!</h1>
            {showTime && <TimeDisplay />}
            {/* 
            Toggle showing the TimeDisplay component 
            (for demonstration purposes)
            */}
            <button onClick={() => setShowTime(prevState => !prevState)}>
                {showTime ? 'Hide Time' : 'Show Time'}
            </button>
        </div>
    );
};

export default MainComponent;