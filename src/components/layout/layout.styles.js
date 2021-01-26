import { createUseStyles } from 'react-jss'

export const useLayoutStyles = createUseStyles((theme) => ({
  '@font-face': [
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Regular.woff2') format('woff2')",
      fallbacks: [
        {
          src: "url('/fonts/modern-era/ModernEra-Regular.woff') format('woff')"
        },
        {
          src:
            "url('/fonts/modern-era/ModernEra-Regular.ttf') format('truetype')"
        }
      ],
      fontWeight: 400,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Medium.woff2') format('woff2')",
      fallbacks: [
        {
          src: "url('/fonts/modern-era/ModernEra-Medium.woff') format('woff')"
        },
        {
          src:
            "url('/fonts/modern-era/ModernEra-Medium.ttf') format('truetype')"
        }
      ],
      fontWeight: 500,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-Bold.woff2') format('woff2')",
      fallbacks: [
        {
          src: "url('/fonts/modern-era/ModernEra-Bold.woff') format('woff')"
        },
        {
          src: "url('/fonts/modern-era/ModernEra-Bold.ttf') format('truetype')"
        }
      ],
      fontWeight: 700,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Modern Era',
      src: "url('/fonts/modern-era/ModernEra-ExtraBold.woff2') format('woff2')",
      fallbacks: [
        {
          src:
            "url('/fonts/modern-era/ModernEra-ExtraBold.woff') format('woff')"
        },
        {
          src:
            "url('/fonts/modern-era/ModernEra-ExtraBold.ttf') format('truetype')"
        }
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
      margin: 0,
      scrollBehavior: 'smooth'
    },
    body: {
      fontFamily: 'Modern Era',
      fontWeight: theme.fontWeights.normal,
      minHeight: '100vh',
      margin: 0,
      fontSize: theme.spacer * 2,
      lineHeight: `${theme.spacer * 3}px`,
      color: theme.palette.gray.main,
      scrollBehavior: 'smooth',
      [theme.breakpoints.md]: {
        fontSize: theme.spacer * 2 + 1,
        lineHeight: `${theme.spacer * 4 - 3}px`
      }
    },
    a: {
      textDecoration: 'none',
      color: 'inherit'
    },
    p: {
      margin: 0
    },
    'h1, h2, h3, h4': {
      margin: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0
    },
    ul: {
      marginBlock: 0,
      paddingInline: 0,
      paddingInlineStart: 0
    }
  },
  layout: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}))
