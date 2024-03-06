import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import defaultTheme from './styles/default-theme'

const rootElement = document.createElement('div')
rootElement.id = 'react-chrome-app'

const globalStyles = document.createElement('style')
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -10px 0px 20px 0px rgba(0, 0, 0, 0.3);
  z-index: 999999999;
  }
`

document.body.appendChild(rootElement)
document.body.appendChild(globalStyles)

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={defaultTheme.config.initialColorMode} />
    <App />
  </React.StrictMode>
)
