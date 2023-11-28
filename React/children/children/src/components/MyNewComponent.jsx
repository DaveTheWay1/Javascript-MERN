import React from 'react';
    
const MyNewComponent = (props) => {
    const { children, header } = props;
    return(
        <div>
            { children }
            {/* displays everything within the component (children)*/}
            <h1>
                { header }
                {/* displays what has been label as header  */}
            </h1>
        </div>
    );
}
    
export default MyNewComponent;