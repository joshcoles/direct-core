import React from 'react';

const fabSatellite = (props) => (
    <button className="fab-satellite" id={props.category} onClick={props.clickHandler}></button>
);

export default fabSatellite;
