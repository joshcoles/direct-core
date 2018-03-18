import React from 'react';

function ListItem(props){
    return (
        <li><span className={props.value.toLowerCase()}><i className={props.icon}></i></span> {props.value}</li>
    );
}

function NeedsList(props){
    const needs = props.needs;
    const listItems = needs.map((need) =>
        <ListItem key={need.id} value={need.title} icon={need.icon} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NeedsList;