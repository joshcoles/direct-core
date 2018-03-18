import React from 'react';

const physiologicalItems = (props) => (
  

  <button 
    className={props.colorClass} 
    id={props.category}
    onClick={props.insertModal}
    >
  </button>
  
);



export default physiologicalItems;