import { createUseStyles } from 'react-jss'

export const useLayoutStyles = createUseStyles(theme => ({
  '@font-face': [
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Regular.woff2') format('woff2')",
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Regular.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Regular.ttf') format('truetype')" }
      ],
      fontWeight: 400,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Medium.woff2') format('woff2')",
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Medium.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Medium.ttf') format('truetype')" }
      ],
      fontWeight: 500,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Bold.woff2') format('woff2')",
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-Bold.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-Bold.ttf') format('truetype')" }
      ],
      fontWeight: 700,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-ExtraBold.woff2') format('woff2')",
      fallbacks: [
        { src: "url('/fonts/modern-era/ModernEra-ExtraBold.woff') format('woff')" },
        { src: "url('/fonts/modern-era/ModernEra-ExtraBold.ttf') format('truetype')" }
      ],
      fontWeight: 800,
      fontStyle: 'normal'
    }
  ],
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      minHeight: '100vh',
      height: '100%',
      margin: 0
    },
    body: {
      fontFamily: 'Modern Era',
      fontWeight: 400,
      minHeight: '100vh',
      margin: 0,
      fontSize: theme.spacing(2),
      lineHeight: `${theme.spacing(3)}px`,
      [theme.breakpoints.sm]: {
        fontSize: (theme.spacing(2) + 1),
        lineHeight: '29px'
      }
    },
    a: {
      textDecoration: 'none',
      color: 'inherit'
    },
    p: {
      margin: 0
    },
    h1: {
      margin: 0
    }
  },
  layout: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 992px)': {
      maxWidth: '12000px'
    },
    maxWidth: '1440px'
  }
}))
