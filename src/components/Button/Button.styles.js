import styled from "styled-components";

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
`

export {
  StyledButton,
  Wrapper,
}
