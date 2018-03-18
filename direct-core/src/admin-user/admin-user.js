import React, { Component } from 'react';
import NeedsList from '../needs_list_view/needs-list-view';
import SubNeedsList from '../needs_list_view/sub-needs-list-view';

const needs = [
    {
        id: 1, 
        title: 'Physiological', 
        icon: 'fas fa-medkit', 
        color: '',
        subNeeds: [
            {id: 1, title: 'Air', stat: '', classes: 'low_stat'},
            {id: 2, title: 'Water', stat: '', classes: ''},
            {id: 3, title: 'Food', stat: '', classes: ''},
            {id: 4, title: 'Shelter', stat: '', classes: ''},
            {id: 5, title: 'Sleep', stat: '', classes: ''},
        ],
        classes: 'active'
    },
    {id: 2, title: 'Safety', icon: 'fas fa-medkit', color: '', classes: ''},
    {id: 3, title: 'Belonging', icon: 'fas fa-medkit', color: '', classes: ''},
    {id: 4, title: 'Esteem', icon: 'fas fa-medkit', color: '', classes: ''},
    {id: 5, title: 'Self-Actualization', icon: 'fas fa-medkit', color: '', classes: ''}
];

class AdminUser extends Component {
  render() {
    return ( 
        <div className="admin_user">
            <div className="col-xs-5 col-xs-offset-4 admin_user_view">
                <SubNeedsList subNeeds={needs[0].subNeeds} />
            </div>
            <div className="col-xs-3 admin_user_navbar">
                <div className="user_info">
                    <div className="user_avatar">
                    </div>
                    <div className="user_name">
                        Alex Hover
                    </div>
                    <div className="user_age">
                        30 YEARS OLD
                    </div>
                    <div className="user_personal_id">
                        ID200012
                    </div>
                </div>
                <div className="needs_list">
                    <NeedsList needs={needs} />
                </div>
            </div>
        </div>
    );
  }
}

export default AdminUser;