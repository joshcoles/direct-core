import React, { Component } from 'react';
import StateSlider from './state-slider/state-slider'


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

const needs = [
    {id: 1, title: 'Physiological', icon: 'fas fa-medkit', color: ''}, 
    {id: 2, title: 'Safety', icon: 'fas fa-medkit', color: ''}, 
    {id: 3, title: 'Belonging', icon: 'fas fa-medkit', color: ''}, 
    {id: 4, title: 'Esteem', icon: 'fas fa-medkit', color: ''}, 
    {id: 5, title: 'Self-Actualization', icon: 'fas fa-medkit', color: ''} 
];

class Admin extends Component {
  render() {
    return (
        <div className="admin">
            <div className="admin_header">
                <div className="header">Core</div>
            </div>
            <div className="admin_navbar">
                <div className="needs_list">
                    <NeedsList needs={needs} />
                </div>
                <div className="percentile_slider">
                   <StateSlider />
                </div>
            </div>
            <div className="admin_main_view">
                Here mainview
            </div>
        </div>
    )
  }
}

export default Admin;