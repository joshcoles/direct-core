import React from 'react';

const fabSatellite = (props) => (
    <button 
        className={props.colorClass} 
        id={props.category} 
        onClick={props.clickHandler} 
        data-open={props.openDrawer}>
    </button>
);

export default fabSatellite;
