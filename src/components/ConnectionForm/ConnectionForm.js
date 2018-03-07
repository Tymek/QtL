import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

const StyledForm = styled.div`
  width: 100%;
  input {
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};
    border-width: 0;
    color: ${props => props.theme.color.foreground};
    background: #000;
    outline: none;
  }
  button {
    padding: 10px;
    margin-left: -1px;
    border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
    border-width: 0;
    cursor: pointer;
    color: ${props => props.theme.color.foreground};
    background: ${props => props.theme.color.secondary};
    outline: none;
  }
`

class ConnectionForm extends Component {
  render() {
    return (
      <StyledForm>
        <input defaultValue="http://127.0.0.1:9999"/>
        <button onClick={() => {}}>Connect</button>
      </StyledForm>
    );
  }
}

export default withTheme(ConnectionForm);
