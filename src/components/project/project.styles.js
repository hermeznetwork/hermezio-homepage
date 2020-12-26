import { createUseStyles } from 'react-jss'

const useProjectStyles = createUseStyles(theme => ({
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
    },
    '& $col23': {
      paddingLeft: theme.spacing(20)
    }
  },
  section2: {

  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    '& $row': {
      justifyContent: 'space-between',
      paddingTop: theme.spacing(7)
    }
  },
  row: {
    display: 'flex'
  },
  invertedRow: {
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
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    width: '50%',
    marginLeft: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5)
  },
  full: {
    width: '100%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  },
  profile: {
    width: theme.spacing(26.75)
  },
  image: {
    width: '100%'
  },
  name: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.black,
    fontSize: '23px',
    fontWeight: theme.fontWeights.medium,
    display: 'block'
  }
}))

export default useProjectStyles
