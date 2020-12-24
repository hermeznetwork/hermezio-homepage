import { createUseStyles } from 'react-jss'

const useDevelopersStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
    }
  },
  section1: {
    paddingTop: theme.spacing(23),
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    '& $content': {
      marginRight: 'auto',
      marginLeft: 0
    }
  },
  section2: {
    '& $col3': {
      margin: 0
    }
  },
  section2Text: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(10)
  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    '& $col2': {
      textAlign: 'left'
    }
  },
  box: {
    background: theme.palette.white,
    borderRadius: 20,
    padding: `${theme.spacing(8)}px ${theme.spacing(10)}px ${theme.spacing(8)}px ${theme.spacing(6.5)}px`,
    fontSize: '23px',
    lineHeight: '35px',
    color: theme.palette.black,
    maxHeight: theme.spacing(30),
    marginRight: theme.spacing(4.5),
    textAlign: 'left'
  },
  highlightedText: {
    fontSize: theme.spacing(4.25),
    fontWeight: theme.fontWeights.bold
  },
  section4: {
    '& $col3': {
      margin: 0,
      marginRight: theme.spacing(4)
    }
  },
  row: {
    display: 'flex'
  },
  col23: {
    width: '67%'
  },
  col2: {
    width: '50%',
    marginLeft: 'auto'
  },
  col3: {
    margin: 'auto',
    width: '33%'
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(16)
  },
  paragraphMargin: {
    marginBottom: 16
  },
  circomText: {
    marginTop: theme.spacing(4),
    marginBottom: -theme.spacing(4)
  },
  discordHiglight: {
    backgroundImage: 'url(./discord-link-background.svg)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    borderRadius: 20,
    padding: theme.spacing(8)
  },
  discordText: {
    color: theme.palette.black,
    fontSize: theme.spacing(5.25),
    fontWeight: theme.fontWeights.bold,
    lineHeight: `${theme.spacing(7)}px`
  }
}))

export default useDevelopersStyles
