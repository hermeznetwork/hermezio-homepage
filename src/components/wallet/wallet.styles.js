import { createUseStyles } from 'react-jss'

const useWalletStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  col23: {
    [theme.breakpoints.md]: {
      width: '67%'
    }
  },
  col2: {
    [theme.breakpoints.md]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  col3: {
    [theme.breakpoints.md]: {
      margin: 'auto',
      width: '33%'
    }
  },
  sectionWrapper: {
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 2.5}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%'
  },
  section1: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  },
  section1Row: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  sectionImg: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    height: '100vw',
    marginTop: theme.spacer * 2,
    width: `calc(100% - ${theme.spacer * 4}px)`,
    [theme.breakpoints.md]: {
      width: '100%',
      marginTop: 0
    }
  },
  section1img: {
    backgroundImage: 'url(../wallet-section1.png)',
    [theme.breakpoints.md]: {
      height: '600px'
    }
  },
  section2img: {
    backgroundImage: 'url(../wallet-section2.png)',
    [theme.breakpoints.md]: {
      height: '577px'
    }
  },
  section4img: {
    backgroundImage: 'url(../wallet-section4.png)',
    [theme.breakpoints.md]: {
      height: '520px'
    }
  },
  section4_2img: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    marginTop: theme.spacer * 2,
    backgroundImage: 'url(../apple-app-store-badge.png)',
    height: '52px',
    marginRight: 0,
    [theme.breakpoints.md]: {
      marginRight: theme.spacer * 2
    }
  },
  section4_3img: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    marginTop: theme.spacer * 2,
    backgroundImage: 'url(../google-play-badge.png)',
    height: '52px',
    [theme.breakpoints.md]: {

    }
  },
  mainTitle: {
    margin: `${theme.spacer * 5}px auto auto 0`,
    [theme.breakpoints.md]: {
      marginTop: 'auto'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      justifyContent: 'left',
      marginBottom: 0
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  },
  section2title: {
    textAlign: 'left'
  },
  section2paragraph: {
    paddingTop: theme.spacer,
    textAlign: 'left',
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 2
    }
  },
  checkMark: {
    color: theme.palette.orange.light,
    paddingRight: theme.spacer
  },
  section3title: {
    marginTop: 0,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 7.5
    }
  },
  steps: {
    [theme.breakpoints.md]: {
      marginLeft: theme.spacer * 10
    }
  },
  carousel: {
    display: 'flex',
    textAlign: 'center',
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.md]: {
      textAlign: 'left',
      marginBottom: 0
    }
  },
  carouselContent: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  carouselTitle: {
    color: theme.palette.black,
    lineHeight: `${theme.spacer * 4}px`,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacer * 2.5,
    marginBottom: theme.spacer,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3.5,
      marginBottom: theme.spacer * 3 - 2
    }
  },
  carouselText: {
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 6
    }
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.md]: {
      display: 'block'
    }
  },
  onlyMobile: {
    display: 'block',
    [theme.breakpoints.md]: {
      display: 'none'
    }
  }
}))

export default useWalletStyles
