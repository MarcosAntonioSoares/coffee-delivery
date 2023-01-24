import styled from "styled-components";

const SIZE = {
  sm: '2rem',
  md: '2.375rem',
} as const

interface SizeProps {
  size: keyof typeof SIZE
}
export const CounterContainer = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: ${(props) => SIZE[props.size]};
  background: ${props => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0 0.5rem;

  > input {
    width: 100%;
    height: 100%;
    text-align: center;
    border: 0;
    background: transparent;

    &:focus {
      box-shadow: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const Button =  styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  background: transparent;
  color: ${props => props.theme['purple-700']};
  border: 0;
`