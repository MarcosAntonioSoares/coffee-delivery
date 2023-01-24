import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  a {
    line-height: 0;
  }
`

export const Location = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  button {
    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme['yellow-100']};
    border: 0;
    line-height: 0;
    border-radius: 8px;
    padding: 0.5rem;

    svg {
      color: ${props => props.theme['yellow-700']};
    }
  }
`

export const HeaderLink = styled(Link) `
 width: 2.375rem;
  height: 2.375rem;
  background: ${props => props.theme['yellow-100']};
  border: 0;
  line-height: 0;
  border-radius: 8px;
  padding: 0.5rem;

  svg {
    color: ${props => props.theme['yellow-700']};
  }
`