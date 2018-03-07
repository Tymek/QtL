import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'
import Slider from './components/Slider'
import theme from './theme'
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: ${theme.color.background};
    user-select: none;
    * {
      user-select: auto;
    } 
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider {...{theme}}>
        <div className="App">
          <Slider />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
