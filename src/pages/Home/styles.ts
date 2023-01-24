import styled from 'styled-components';

import imageBackground from '../../assets/Background.png'
import { Devices } from '../../styles/theme/default';

export const HomeContainer = styled.section`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  height: 34rem;
`;

export const HomeContent = styled.div`
  display: grid; 
  grid-template-columns: 2fr 1fr;
`

export const HomeText = styled.div`
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    color: ${props => props.theme['gray-900']};
    font-weight: 800;
    margin-bottom: 1.25rem;
    line-height: 3.9rem;
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme['gray-800']};
    line-height: 1.625rem;
  }
`

export const HomeItems = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr;
  margin-top: 4rem;
`

export const HomeSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  &:nth-child(-n + 2){
    margin-bottom: 1.25rem;
  }
`

const STATUS_COLORS = {
  yellow_700: 'yellow-700',
  yellow_500: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icon = styled.span<StatusProps>`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.5rem;
gap: 0.5rem;

width: 2rem;
height: 2rem;
color: ${props => props.theme.white};
background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
border-radius: 50%;
`

export const HomeImage = styled.div`
  display: flex;
  align-items: center;
`

export const HomeListContaniner = styled.section`
  padding: 2rem 0;
`

export const HomeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  h3{
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
  }
`

export const Filter = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  li {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme['yellow-700']};
    border: 1px solid ${props => props.theme['yellow-500']};
    border-radius: 100px;
    padding: 0.375rem 0.75rem;
    line-height: 0.813rem;
    height: 1.5rem;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 3rem 2rem;

   @media ${Devices.lg} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

export const Card = styled.div`
  text-align: center;
  background: ${props => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;

  img {
    margin-top: -1.25rem;
  }
`

export const CardContent = styled.div`
  padding: 0.5rem 1.25rem 1.25rem 1.25rem;

  h2 {
    font-family: 'Baloo 2',cursive;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.625rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.138rem;
  }
`

export const CardFooter =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

    h6 {
    font-family: 'Baloo 2',cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.theme['gray-700']};
    display: flex;
    align-items: center;
    gap: 0.2rem;

    span {
      font-family: 'Roboto',sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span{
    background: ${props => props.theme['yellow-100']};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.813rem;
    text-transform: uppercase;
    color: ${props => props.theme['yellow-700']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['gray-400']};
    border-radius: 6px;
  }

  > button {
    line-height: 0;
    padding: 0.5rem;
    gap: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme['purple-700']};
    border-radius: 6px;
    color: ${props => props.theme.white};
    border: 0;
  }
`