import { createUseStyles } from 'react-jss'

const useDevelopersStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    }
  },
  col23: {
    [theme.breakpoints.sm]: {
      width: '67%'
    }
  },
  col2: {
    [theme.breakpoints.sm]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  col3: {
    [theme.breakpoints.sm]: {
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
    [theme.breakpoints.sm]: {
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
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      paddingTop: theme.spacer * 19,
      textAlign: 'left'
    }
  },
  section1img: {
    backgroundImage: 'url(./technology-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '384px',
    [theme.breakpoints.sm]: {
      height: '650px'
    }
  },
  mainTitle: {
    marginTop: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginTop: 'auto',
      marginLeft: 0
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.sm]: {
      justifyContent: 'left'
    }
  },
  section2: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      marginLeft: 'auto',
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5
    }
  },
  section2Title: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      margin: 0
    }
  },
  section2Text: {
    paddingTop: theme.spacer * 2,
    paddingBottom: theme.spacer * 4,
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacer * 3,
      paddingBottom: theme.spacer * 10
    }
  },
  section3: {
    textAlign: 'center',
    '& $col2': {
      textAlign: 'left'
    }
  },
  section3img: {
    backgroundImage: 'url(./technology-section3.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.sm]: {
      height: '390px'
    }
  },
  section3Title: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: theme.spacer * 3
    }
  },
  section4Box: {
    [theme.breakpoints.sm]: {
      width: '31%'
    },
    '&:first-child': {
      marginLeft: 0
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  section4SubTitle: {
    marginTop: theme.spacer * 5,
    marginBottom: theme.spacer * 3,
    '&:first-child': {
      marginTop: 0
    },
    [theme.breakpoints.sm]: {
      marginTop: 0,
      marginBottom: 0
    }
  },
  circomText: {
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 4,
      marginBottom: -theme.spacer * 4
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: 0,
    marginBottom: theme.spacer * 5,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 9,
      marginBottom: theme.spacer * 16
    }
  },
  paragraphMargin: {
    marginBottom: 16
  },
  discordHiglight: {
    backgroundImage: 'url(./discord-link-background-mobile.svg)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    borderRadius: 30,
    padding: `${theme.spacer * 6}px ${theme.spacer * 3.5}px ${theme.spacer * 4.5}px`,
    marginTop: theme.spacer * 5,
    [theme.breakpoints.sm]: {
      backgroundImage: 'url(./discord-link-background.svg)',
      padding: theme.spacer * 8,
      marginTop: 0
    }
  },
  discordText: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacer * 3.5,
    lineHeight: `${theme.spacer * 4.5}px`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacer * 5.25,
      lineHeight: `${theme.spacer * 7}px`
    }
  },
  discordButton: {
    [theme.breakpoints.sm]: {
      margin: 0,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      '& $buttonWrapper a': {
        margin: 'auto'
      }
    }
  },
  inlineGraphicText: {
    [theme.breakpoints.sm]: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  },
  inlineGraphicImage: {
    [theme.breakpoints.sm]: {
      maxHeight: theme.spacer * 48
    }
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'block'
    }
  }
}))

export default useDevelopersStyles
