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
      padding: `${theme.spacer * 12}px ${theme.spacer * 9}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: '1020px'
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
      paddingTop: theme.spacer * 23,
      textAlign: 'left'
    }
  },
  mainTitle: {
    marginTop: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginTop: 'auto'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.sm]: {
      justifyContent: 'left'
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
  section3Title: {
    marginTop: theme.spacer * 8,
    marginBottom: theme.spacer * 4,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 16,
      marginBottom: theme.spacer * 8
    }
  },
  section3SubTitle: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: theme.spacer * 3
    }
  },
  boxes: {
    [theme.breakpoints.sm]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  boxWrapper: {
    [theme.breakpoints.sm]: {
      width: '30%',
      margin: 0
    }
  },
  box: {
    background: theme.palette.white,
    borderRadius: 20,
    fontSize: '23px',
    lineHeight: '35px',
    color: theme.palette.black,
    maxHeight: theme.spacer * 30,
    padding: `${theme.spacer * 8}px ${theme.spacer * 9.5}px ${theme.spacer * 8}px ${theme.spacer * 6.5}px`,
    textAlign: 'left',
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: theme.spacer * 0
    }
  },
  highlightedText: {
    fontSize: theme.spacer * 4.25,
    fontWeight: theme.fontWeights.bold
  },
  section4: {
    '& $col3': {
      [theme.breakpoints.sm]: {
        margin: 0,
        marginRight: theme.spacer * 4
      }
    }
  },
  section4SubTitle: {
    marginTop: theme.spacer * 5,
    marginBottom: theme.spacer * 3,
    '&:first-child': {
      marginTop: 0
    },
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 0,
      marginBottom: theme.spacer * 0
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
    marginTop: theme.spacer * 0,
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
    borderRadius: 20,
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
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-grid'
    }
  }
}))

export default useDevelopersStyles
