import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from '../../socket';

const StyledForm = styled.form`
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
  constructor (props, context) {
    super(props, context)
    this.state = {
      address: '127.0.0.1:9999',
      connected: false,
    }
  }

  handleChange = event => {
    this.setState({address: event.target.value})
  }

  handleSubmit = event => {
    connect(this.state.address);
    // this.setState({connected: isConnected})
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input value={this.state.address} onChange={this.handleChange}/>
        <button type="submit" value="Submit">{!this.state.connected ? 'Connect' : 'Disconnect'}</button>
      </StyledForm>
    );
  }
}

export default withTheme(ConnectionForm);
