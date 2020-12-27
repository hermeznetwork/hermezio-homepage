import { createUseStyles } from 'react-jss'

const useProjectStyles = createUseStyles(theme => ({
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
      paddingBottom: 'inherit',
      textAlign: 'left',
      '& $col23': {
        paddingLeft: theme.spacing(20)
      }
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
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(9)
    }
  },
  title: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginBottom: 'inherit'
    }
  },
  subTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(2.5)
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    marginLeft: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5),
      width: '50%'
    }
  },
  full: {
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(8)
    }
  },
  profilesTitle: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginBottom: 0
    }
  },
  profilesRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.sm]: {
      flexWrap: 'initial',
      paddingTop: theme.spacing(7)
    }
  },
  profile: {
    flex: '0 45%',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.sm]: {
      flex: 'initial',
      paddingBottom: theme.spacing(0),
      width: theme.spacing(26.75)
    }
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
