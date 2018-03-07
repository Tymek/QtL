import styled, { css } from "styled-components";

const Wrapper = styled.div`
  outline: none;
  & *:focus {
    outline: none;
  }
`

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  ${props => props.color ? css`
    background: ${props => props.color};
  ` : ``}
`

export {
  StyledButton,
  Wrapper,
}
