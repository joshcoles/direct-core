import React, { Component } from 'react';
import ListView from './list_view/list-view';
import StateSlider from './state-slider/state-slider';
import NeedsListComponent from '../needs_list_view/needs-list-view';
import {NEEDS_ITEMS} from '../constants/needs';

class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      minPercentage: 50,
      selectedCategoryId: 1,
    }
    this.needItemClicked = this.needItemClicked.bind(this);
  }

  updatePercentage = (value) => {
    this.setState({
      minPercentage: value
    });
  }

  needItemClicked(id) {
    this.setState({
      selectedCategoryId: id
    });
  }

  render() {
//    const needs = NEEDS_ITEMS.map(need => {
//      need.icon = 'fas fa-medkit'
//    })
    return (
        <div className="admin">
            <div className="admin_header">
                <div className="header">Core</div>
            </div>
            <div className="admin_navbar">
                <div className="needs_list">
                    <NeedsListComponent needs={NEEDS_ITEMS} onNeedItemClicked={this.needItemClicked}/>
                </div>
                <div className="percentile_slider">
                   <StateSlider changeHandler={this.updatePercentage}/>
                </div>
            </div>
            <div className="admin_main_view">
                <ListView minPercentage={this.state.minPercentage} selectedCategoryId={this.state.selectedCategoryId} />
            </div>
        </div>
    )
  }
}

export default Admin;