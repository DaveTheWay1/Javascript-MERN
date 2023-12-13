import React from 'react';
import {useParams} from 'react-router-dom';

const Hello = (props) => {
    const {hello} = useParams();
    return(
        <div>
            <h1>{hello}</h1>
        </div>
    );
};

export default Hello;