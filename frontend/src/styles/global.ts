import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
    --color-primary: ${props => props.theme.colors.primary};
  }

  * {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }

  html, body {
      background-color: ${props => props.theme.colors.background};
  }

  a, a:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`
