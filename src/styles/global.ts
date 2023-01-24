import styled, { createGlobalStyle } from 'styled-components'
import { defaultTheme, Devices } from './theme/default'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${defaultTheme['yellow-700']};
  }

  body {
    background: ${defaultTheme['gray-100']};
    color: ${defaultTheme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${defaultTheme['gray-800']};
  }
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media ${Devices.md} {
    max-width: 960px;
  }

  @media ${Devices.lg} {
    max-width: 1140px;
  }

  @media ${Devices.xl} {
    max-width: 1440px;
  }
`;