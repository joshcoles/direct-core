import React from 'react';

const belongingItems = (props) => (

  <button
    className={props.colorClass}
    id={props.category} 
    onClick={props.insertModal}
    >
    </button>
    
);

export default belongingItems;