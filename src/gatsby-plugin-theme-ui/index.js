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
      glass: 'hsl(186, 80%, 30%)',
      glass80: 'hsla(186, 80%, 30%, 0.8)',
      glass00: 'hsla(186, 80%, 30%, 0.2)',
      chalk: 'hsl(186, 24%, 48%)',
      smoke: '#4558',
      dust: '#5447',
  modes: {
      light: {
        text: 'hsl(229, 92%, 8%)', // ink
        background: 'hsl(229, 27%, 77%)', // stone
        primary: 'hsl(229, 85%, 57%)', // paint
        secondary: 'hsl(259, 85%, 57%)', // wax
        muted: '#4455', // haze
        paper: '#fffe',
        lead: 'hsl(229, 37%, 67%)',
        glass: 'hsl(229, 24%, 93%)',
        glass80: 'hsla(229, 24%, 93%, 0.8)',
        glass00: 'hsla(229, 24%, 93%, 0.2)',
        chalk: '#e2e5e7',
        smoke: '#6767',
        dust: '#8786',
      },
      sea: {
        paper: 'hsla(192, 68%, 45%, 0.93)',
        text: 'hsl(192, 57%, 12%)',
        background: 'hsl(162, 72%, 7%)',
        cloud: 'hsla(192, 80%, 80%, 0.5)',
        smoke: 'hsla(192, 44%, 86%, 0.2)',
        primary: 'hsl(62, 57%, 77%)',
        chalk: 'hsl(325, 67%, 57%)',
        dust: 'hsl(300, 57%, 32%)',
        lead: 'hsl(192, 57%, 32%)',
        glass: 'hsla(192, 44%, 68%, 1)',
        glass80: 'hsla(192, 44%, 68%, 0.8)',
        glass00: 'hsla(192, 44%, 68%, 0.2)',
        secondary: 'hsl(32, 57%, 77%)',
      },
      land: {
        text: 'hsl(180, 80%, 92%)',
        background: 'hsl(180, 72%, 27%)',
        paper: 'hsla(180, 24%, 12%, 0.94)',
        primary: 'hsl(136, 96%, 67%)', /* rgb(27, 217, 217) */
        secondary: 'hsl(60, 90%, 82%)',
        muted: 'hsla(180, 78%, 72%, 0.48)',
        chalk: 'hsl(180, 48%, 87%)',
        lead: 'hsl(180, 28%, 28%)',
        glass: 'hsla(180, 48%, 48%, 1)',
        glass80: 'hsla(180, 48%, 48%, 0.8)',
        glass00: 'hsla(180, 48%, 48%, 0.2)',
        capri: 'hsl(192, 78%, 35%)',
        azure: 'hsl(180, 78%, 38%)',
        jung: 'hsl(168, 72%, 37%)',
        foam: 'hsl(168, 64%, 32%)',
        lightning: 'hsl(72, 100%, 72%)',
        marigold: 'hsl(48, 100%, 72%)',
        goldilocks: 'hsl(32, 100%, 72%)',
      },
      fuch: {
        paper: 'hsla(330, 68%, 42%, 0.94)',
        text: 'hsla(255, 100%, 100%, 1)',
        background: 'hsla(330, 72%, 18%, 1)',
        glass: 'hsla(330, 53%, 53%, 1)',
        glass00: 'hsla(330, 53%, 53%, 0.3)',
        glass80: 'hsla(330, 53%, 53%, 0.7)',
        haze: 'hsla(330, 28%, 78%, 0.7)',
        primary: 'hsla(150, 68%, 68%, 1)',
        secondary: 'hsla(120, 68%, 68%, 1)',
        chalk: 'hsla(190, 58%, 78%, 1)',
        paint: 'hsla(170, 78%, 68%, 1)',
        smoke: 'hsla(330, 28%, 12%, 0.3)',
        muted: 'hsla(330, 28%, 88%, 0.3)',
        lead: 'hsl(60, 68%, 68%)',
      }
		},
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
