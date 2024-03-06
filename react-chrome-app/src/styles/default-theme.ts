import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export default extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', '#08080b')(props),
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        'box-sizing': 'border-box'
      }
    })
  },
  fonts: {
    body: 'Rambla, Inter, system-ui, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu'
  },
  colors: {
    primary: '#EE6900',
    secondary: '#D94434 ',
    background: '#F4F8FA',
    lightgray: '#CFCFCF',
    black: '#1C1C1C ',
    card: '#354EC5'
  },
  Tabs: {
    colorScheme: {
      primary: '#EE6900'
    }
  }
})
