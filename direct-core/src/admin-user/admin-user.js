import React, { Component } from 'react';
import NeedsList from '../needs_list_view/needs-list-view';

const needs = [
    {id: 1, title: 'Physiological', icon: 'fas fa-medkit', color: ''},
    {id: 2, title: 'Safety', icon: 'fas fa-medkit', color: ''},
    {id: 3, title: 'Belonging', icon: 'fas fa-medkit', color: ''},
    {id: 4, title: 'Esteem', icon: 'fas fa-medkit', color: ''},
    {id: 5, title: 'Self-Actualization', icon: 'fas fa-medkit', color: ''}
];

class AdminUser extends Component {
  render() {
    return ( 
        <div className="admin_user">
            <div className="col-xs-9 admin_user_view">
                <div className="stat sub_need_1">
                    <div className="stat_level">
                    </div>
                    <div className="stat_label">
                        Air
                    </div>
                </div>
                <div className="stat sub_need_2">
                    <div className="stat_level">
                    </div>
                    <div className="stat_label">
                        Water
                    </div>
                </div>
                <div className="stat sub_need_3">
                    <div className="stat_level">
                    </div>
                    <div className="stat_label">
                        Food
                    </div>
                </div>
                <div className="stat sub_need_4">
                    <div className="stat_level">
                    </div>
                    <div className="stat_label">
                        Shelter
                    </div>
                </div>
                <div className="stat sub_need_5">
                    <div className="stat_level">
                    </div>
                    <div className="stat_label">
                        Sleep
                    </div>
                </div>
            </div>
            <div className="col-xs-3 admin_user_navbar">
                <div className="user_info">
                    <div className="user_avatar">
                        <img src="https://placeimg.com/200/200/people/grayscale" />
                        <div className="user_stat">
                        </div>
                    </div>
                    <div className="user_name">
                        Alex Hover
                    </div>
                    <div className="user_age">
                        30 YEARS OLD
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