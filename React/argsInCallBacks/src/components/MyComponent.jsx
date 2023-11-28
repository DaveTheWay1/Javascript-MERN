import React from 'react';

const MyComponent = props => {
    const {movies} = props;
    // const onClickHandler = (e) => {
    //     alert(`You have clicked the button`);
    // };
    // const onClickHandler = (e, value) => {
    //     // * e and item.name were passed in. e takes the place of e and value takes item.name
    //     if(value === "Gisselle"){
    //         alert(`I love you ${value}. Don't be nervous :)`);
    //     }else if(value === "mow mow"){
    //         alert(`and the ugly mow loves you too!`)
    //     }
    // }

    const onClickHandler = (e.target.value) => {
        // * e and item.name were passed in. e takes the place of e and value takes item.name
        if(value === "Gisselle"){
            alert(`I love you ${value}. Don't be nervous :)`);
        }else if(value === "mow mow"){
            alert(`and the ugly mow loves you too!`)
        }
    }
    // return(
    //     <div>
    //         {
    //             movies.map( (item, index) => (
    //                 <button key={index} onClick={ (e) => onClickHandler(e, item) }>{ item.name} {item.year} </button>
    //             ))
    //         }
    //     </div>
    // )
    // * either or works. whichever goes smoothly for you.
    // * important to add key={index} to avoid a react error.
    // * when an object is created and it has more than one property or a specified property like in our case
    // * it is important to include that specific just like the item.name below
    return movies.map( (item, index) => {
        return <button key={index} onClick={ (e) => onClickHandler(e, item.name) }>{ item.name }</button>
    });
        }

export default MyComponent;