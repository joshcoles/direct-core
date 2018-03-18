import React, { Component } from 'react';
import landingPage from '../../../assets/images/landing-page/core.png';

class LandingPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="user landing-page">
        <img src={landingPage}/>
      </div>
    )
  }
}

export default LandingPage;