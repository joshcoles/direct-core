import React, { Component } from 'react';
import landingPage from '../../../assets/images/landing-page/core.png';

class LandingPage extends Component {



  constructor(props) {
    super(props);

    this.state = {
      homepageVisible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        homepageVisible: true
      });
    }, 500);
  }

  render() {
   
    let classes = `${this.state.homepageVisible ? 'visible' : ''}`;

    return (
      <div className="user landing-page">
        <img src={landingPage} className={classes}/>
      </div>
    )
  }
}

export default LandingPage;