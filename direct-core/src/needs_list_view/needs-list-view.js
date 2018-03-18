import React, { Component } from 'react';

class ListItem extends Component{

    constructor(props) {
        super(props);
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    onItemClicked(e) {
        this.props.onItemClicked(this.props.id)
    }

    render() {
        let text = this.props.title.toUpperCase()
        return (
            <li className="admin_needs-list-item" onClick={this.onItemClicked}><span className={this.props.title.toLowerCase()}><img src={this.props.icon}/></span> {text}</li>
        )
    }
}

class NeedsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const needs = this.props.needs;

        const listItems = needs.map((need) => {
            return (
                <ListItem key={need.id} id={need.id} title={need.title} icon={need.icon} onItemClicked={this.props.onNeedItemClicked}/>
                )
            }
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default NeedsList;
