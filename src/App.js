import React, { Component } from 'react'
import Slider from './components/Slider'
import Button from './components/Button'
import theme from './theme'
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import ConnectionForm from './components/ConnectionForm';

injectGlobal`
  body {
    background: ${theme.color.background};
    user-select: none;
    * {
      user-select: auto;
    } 
  }
`

const AppWrapper = styled.div`
  /* display: flex; */
`
const SliderWrapper = styled.div`
  width: 80px;
  overflow: hidden;
  float: left;
`
const ButtonsWrapper = styled.div`
  display: flex;
  float: left;
  flex-flow: row wrap;
  width: 280px;
  padding-top: 15px;
  & > div {
    margin: 10px;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider {...{theme}}>
        <AppWrapper>
          <ConnectionForm />
          <hr />
          <ButtonsWrapper>
            <Button id="313" />
            <Button id="299" />
            <Button id="300" />
            <Button id="302" />
            <Button id="308" />
            <Button id="309" />
          </ButtonsWrapper>
          <SliderWrapper>
            <Slider id="17" />
          </SliderWrapper>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
