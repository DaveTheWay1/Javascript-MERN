import React from 'react';

const Test = (props) => {
    const {success} = props
    return(
        <div>
            <h1>This Test is a {success}</h1>
        </div>
    );
};
export default Test;
