import React, { Component } from 'react';
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }


  handleChange = value => {
    this.setState({
      value: value
    })
    this.props.changeHandler(value)
  };


  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Horizontal