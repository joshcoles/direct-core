import React from 'react';

function ListItem(props){
    return (
        <div className={'stat ' + props.classes}>
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
        <ListItem key={subNeed.id} value={subNeed.title} stat={subNeed.stat} classes={subNeed.classes} />
    );

    return listItems;
}

export default SubNeedsList;