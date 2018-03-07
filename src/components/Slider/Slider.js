import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import { withTheme } from 'styled-components'

import {
  Wrapper,
} from './Slider.styles'

class DefaultSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChange = (value) => {
    if (Math.round(value) === Math.round(this.value)) return
    window.navigator.vibrate(12);
    this.setState({
      value: value
    })
  }

  render () {
    const { value } = this.state
    return (
      <Wrapper className='slider'>
        <Slider
          min={0}
          max={255}
          tooltip={false}
          value={value}
          orientation='vertical'
          onChange={this.handleChange}
        />
        <div className='value'>{value}</div>
      </Wrapper>
    )
  }
}

export default withTheme(DefaultSlider)
