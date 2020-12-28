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
  section: {
    padding: `${theme.spacing(8)}px ${theme.spacing(2)}px ${theme.spacing(6)}px ${theme.spacing(2)}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`,
      flexDirection: 'row'
    }
  },
  section1: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(23),
      textAlign: 'left'
    }
  },
  mainTitle: {
    marginTop: theme.spacing(2),
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
  section2: {

  },
  section2Title: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      margin: 0
    }
  },
  section2Text: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(10)
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    '& $col2': {
      textAlign: 'left'
    }
  },
  section3Title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(16),
      marginBottom: theme.spacing(8)
    }
  },
  section3SubTitle: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginBottom: theme.spacing(3)
    }
  },
  box: {
    background: theme.palette.white,
    borderRadius: 20,
    fontSize: '23px',
    lineHeight: '35px',
    color: theme.palette.black,
    maxHeight: theme.spacing(30),
    padding: `${theme.spacing(8)}px ${theme.spacing(10)}px ${theme.spacing(8)}px ${theme.spacing(6.5)}px`,
    textAlign: 'left',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginBottom: theme.spacing(0),
      marginRight: theme.spacing(4.5)
    }
  },
  highlightedText: {
    fontSize: theme.spacing(4.25),
    fontWeight: theme.fontWeights.bold
  },
  section4: {
    '& $col3': {
      [theme.breakpoints.sm]: {
        margin: 0,
        marginRight: theme.spacing(4)
      }
    }
  },
  section4SubTitle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    '&:first-child': {
      marginTop: 0
    },
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0)
    }
  },
  circomText: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(4),
      marginBottom: -theme.spacing(4)
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(16)
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
    padding: `${theme.spacing(6)}px ${theme.spacing(3.5)}px ${theme.spacing(4.5)}px`,
    marginTop: theme.spacing(5),
    [theme.breakpoints.sm]: {
      backgroundImage: 'url(./discord-link-background.svg)',
      padding: theme.spacing(8),
      marginTop: 0
    }
  },
  discordText: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacing(3.5),
    lineHeight: `${theme.spacing(4.5)}px`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(5.25),
      lineHeight: `${theme.spacing(7)}px`
    }
  },
  webOnly: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-grid'
    }
  }
}))

export default useDevelopersStyles
