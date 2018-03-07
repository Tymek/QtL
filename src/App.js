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
            <Button onClick={() => {}} />
            <Button onClick={() => {}} />
            <Button onClick={() => {}} />
            <Button onClick={() => {}} />
            <Button onClick={() => {}} />
            <Button onClick={() => {}} />
          </ButtonsWrapper>
          <SliderWrapper>
            <Slider />
          </SliderWrapper>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
