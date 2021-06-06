import palettes from './palettes'

// example theme file
const theme = {
	initialColorModeName: 'default',
  colors: {
      text: 'white',
      background: 'hsl(186, 27%, 64%)',
      primary: 'hsl(77, 98%, 58%)',
      secondary: 'hsl(157, 98%, 58%)',
      muted: 'hsla(186, 12%, 54%, 1)', // haze
      paper: 'hsla(186, 22%, 32%, 0.92)',
      lead: 'hsla(186, 20%, 80%, 1)',
      glass00: 'hsla(186, 80%, 30%, 1)',
      glass80: 'hsla(186, 80%, 30%, 0.8)',
      glass20: 'hsla(186, 80%, 30%, 0.2)',
      chalk: 'hsl(77, 24%, 78%)',
      smoke: '#4558',
      dust: '#5447',
  modes: palettes,
  },
	fonts: {
		body: 'Merriweather, Georgia, serif',
    heading: '"Avenir Next", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [14, 17, 22, 29, 38, 50, 66, 74, 98],
  fontWeights: {
    body: 300,
    heading: 600,
    bold: 800,
  },
  lineHeights: {
    body: 1.68,
    heading: 1.25,
  },
  letterSpacing: {
    body: 'normal',
    caps: '0.2em',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      fontSize: 1,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}
export default theme
