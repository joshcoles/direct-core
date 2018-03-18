import React from 'react';
import CircularProgressBar from '../circle_progress_bar/circle-progress-bar';

function ListItem(props){
    return (
        <div className={'stat ' + props.classes}>
            <div className="stat_level">
                <CircularProgressBar
                strokeWidth="10"
                sqSize={props.circle}
                percentage={props.stat}/>
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
        <ListItem key={subNeed.id} value={subNeed.title} stat={subNeed.stat} classes={subNeed.classes} circle={subNeed.circle} />
    );

    return listItems;
}

export default SubNeedsList;