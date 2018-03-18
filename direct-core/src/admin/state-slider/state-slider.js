import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 50
    }
  }


  handleChange = value => {
    this.setSliderBackgroundColor()
    this.setState({
      value: value
    })
    this.props.changeHandler(value)
  };

  componentDidMount() {
    this.setSliderBackgroundColor()
  }

  setSliderBackgroundColor() {
    const { value } = this.state

    let leftSection = ReactDOM.findDOMNode(this.refs.slider);
    let backgroundColor = "green"
    if (value < 33) {
      backgroundColor = "red"
    }
    else if (value < 66) {
      backgroundColor = "orange"
    }
    leftSection.firstElementChild.style.backgroundColor = backgroundColor
  }

  render () {
    const { value } = this.state

    return (
      <div className='slider'>
        <Slider
          ref = "slider"
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