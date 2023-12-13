import React, { useEffect, useState } from 'react';

export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
        return function clearInt() {
            clearInterval(int);
        }
    }, []);
// * the clear function, though not always necessary, it helps prevent issues when used though they might not
// * always be visible to the user. 
    return (
        <div>Current Time: {time}</div>
    );
};

// * The necessity of cleanup functions like clearInterval in React's 
// * useEffect depends on the specific use case and the resources 
// * your component utilizes.
        // Intervals and Time-Related Operations: In the case of intervals 
        // used to update time or perform periodic tasks, it's crucial to clear 
        // them when the component unmounts.

        // Event Listeners: Similarly, if you attach event listeners directly 
        // within a component, it's essential to remove or detach these 
        // listeners when the component is unmounted. 

        // Subscriptions or External Connections: Components that establish 
        // connections to external services (like WebSockets, APIs, etc.)
        // or set up subscriptions should unsubscribe or disconnect when 
        // the component unmounts

// ? to apply it on every file necessary or to create a file and import it on every file necessary.
        // sometimes to keep things neat and simple its okay simply apply the clear interval on the file 
        // necessary. but if it is going to be used more than one that it is best to do it on a seperate file 
        // and import it for each file necessary.
