import React, { Component } from 'react'
import { withTheme } from 'styled-components'

import {
  StyledButton,
  Wrapper,
} from './Button.styles'

class DefaultButton extends Component {
  vibrate = () => {
    window.navigator.vibrate(40);
  }

  render () {
    return (
      <Wrapper>
        <StyledButton onClick={this.props.onClick} onTouchStart={this.vibrate} />
      </Wrapper>
    )
  }
}

export default withTheme(DefaultButton)
