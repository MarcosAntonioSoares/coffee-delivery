import styled from "styled-components";

interface ButtonProps {
  size?: "small" | "medium" | "large",
  color?: 'primary' | 'secondary' | 'default';
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 14rem;
  background: ${(props)=> props.theme['gray-400']};
  border-radius: 6px;
  border: 0;

  svg {
    color: ${(props)=> props.theme['purple-500']};
  }

  &:hover {
      background: ${(props)=> props.theme['gray-500']};
  }

  &:focus {
    background: ${(props)=> props.theme['purple-100']};
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }
`