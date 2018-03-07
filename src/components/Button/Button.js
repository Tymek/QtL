import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import { sendCMD } from '../../socket';

import {
  StyledButton,
  Wrapper,
} from './Button.styles'

class DefaultButton extends Component {
  vibrate = () => {
    window.navigator.vibrate(50);
  }

  handleClick = event => {
    sendCMD(`${this.props.id}|255`);
  }

  render () {
    return (
      <Wrapper>
        <StyledButton
          onClick={this.handleClick}
          onTouchStart={this.vibrate}
          color={this.props.color}
        />
      </Wrapper>
    )
  }
}

export default withTheme(DefaultButton)
