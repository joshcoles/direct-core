import React from 'react';
import { Circle } from 'rc-progress';

function ListItem(props){
    return (
        <div className={'stat ' + props.classes}>
            <div className="stat_level">
                <Circle strokeWidth="10" trailWidth="10" trailColor="#374458" strokeLinecap="butt" gapDegree="90" gapPosition="bottom" strokeColor={props.circle.color} percent={props.circle.percentage} />
            </div>
            <div className="stat_label">
                <div className="stat_title">{props.title}</div>
                <div className="stat_info">{props.stat}</div>
            </div>
        </div>
    );
}

function SubNeedsList(props){
    const subNeeds = props.subNeeds;
    const listItems = subNeeds.map((subNeed) =>
        <ListItem key={subNeed.id} title={subNeed.title} stat={subNeed.stat} classes={subNeed.classes} circle={subNeed.circle} />
    );

    return listItems;
}

export default SubNeedsList;