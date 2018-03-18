import React, { Component } from 'react';
import _ from 'lodash';
import {IconButton, GridTile, GridList, Avatar} from 'material-ui'
import ActionIcon from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PeopleData from '../data/people'
import {green600, orange600, red600} from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

class ListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      minPercentage: props.minPercentage
    }

    this.onTileClicked = this.onTileClicked.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({
      minPercentage: props.minPercentage
    })
  }

  onTileClicked(event) {
    event.preventDefault();
    alert('Hey');
  }

  render() {

    let receivedId = this.props.selectedCategoryId;
    let peopleData = PeopleData.filter(person => person.needs[receivedId].percentage < this.state.minPercentage)
    peopleData = peopleData.sort((personOne, personTwo) => personOne.needs[receivedId].percentage - personTwo.needs[receivedId].percentage)

    return (
    <MuiThemeProvider>
        <div style={styles.root} >
          <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={4}
          >
            {peopleData.map((person) => {
              let color = green600
              if (person.needs[receivedId].percentage < 33)
                  color = red600
              else if (person.needs[receivedId].percentage < 66)
                color = orange600

              return (
              <GridTile
              key={person.id}
              title={person.title}
              actionIcon={<IconButton><Avatar className="action-icon" backgroundColor={color}>{person.needs[receivedId].percentage}</Avatar></IconButton>}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              className="person-tile"
              onClick={this.onTileClicked}
              >
                <img src={person.img} />
              </GridTile>
            )
            })}
          </GridList>
        </div>
    </MuiThemeProvider>
    )
  }
}

export default ListView;