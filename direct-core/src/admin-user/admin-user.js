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
            <div className="admin_user_view">
            </div>
            <div className="admin_user_navbar">
                <div className="needs_list">
                    <NeedsList needs={needs} />
                </div>
            </div>
        </div>
    );
  }
}

export default AdminUser;