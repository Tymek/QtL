import styled from "styled-components";

const Wrapper = styled.div`
  outline: none;
  & *:focus {
    outline: none;
  }

  .rangeslider {
    &.rangeslider-vertical {
      background: #000;
      max-width: 15px;
      border-radius: 1px;
      border-radius: ${props => props.theme.borderRadius};
      
      .rangeslider__handle {
        width: 45px;
        height: 20px;
        left: -15px;
        border-radius: ${props => props.theme.borderRadius};
        background: ${props => props.theme.color.foreground};
      }
      .rangeslider__fill {
        border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
        background: ${props => props.theme.color.primary};
      }
    }
  }
`

export {
  Wrapper
}
