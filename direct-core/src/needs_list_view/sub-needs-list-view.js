import React, { Component } from 'react';

function ListItem(props){
    return (
        <div className="stat">
            <div className="stat_level">
            </div>
            <div className="stat_label">
                {props.value}
            </div>
        </div>
    );
}

function SubNeedsList(props){
    const subNeeds = props.subNeeds;
    const listItems = subNeeds.map((subNeed) =>
        <ListItem key={subNeed.id} value={subNeed.title} stat={subNeed.stat} />
    );

    return listItems;
}

export default SubNeedsList;