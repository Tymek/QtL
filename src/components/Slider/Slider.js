import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import { withTheme } from 'styled-components'
import 'react-rangeslider/lib/index.css'
import { sendCMD } from '../../socket';

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
    window.navigator.vibrate(15);
    this.setState({
      value: value
    })

    sendCMD(`${this.props.id}|${this.state.value}`);
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
      </Wrapper>
    )
  }
}

export default withTheme(DefaultSlider)
