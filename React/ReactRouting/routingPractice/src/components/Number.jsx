import React from 'react';
import {useParams} from 'react-router-dom';

const Number = (props) => {
    const {int} = useParams();
    return(
        <div>
            <h1>{int}</h1>
        </div>
    );
};
export default Number;