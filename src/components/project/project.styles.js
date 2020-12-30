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
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 9}px`,
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
      paddingTop: theme.spacer * 23,
      paddingBottom: 'inherit',
      textAlign: 'left',
      '& $col23': {
        paddingLeft: theme.spacer * 20
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
      paddingTop: theme.spacer * 12,
      paddingBottom: theme.spacer * 9
    }
  },
  title: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: 'inherit'
    }
  },
  subTitle: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 1,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 0,
      marginBottom: theme.spacer * 2.5
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    marginLeft: 'auto',
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 3,
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5,
      width: '50%'
    }
  },
  dividerFullWidth: {
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 10,
      marginBottom: theme.spacer * 8
    }
  },
  profilesTitle: {
    marginBottom: theme.spacer * 2,
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
      paddingTop: theme.spacer * 7
    }
  },
  profile: {
    flex: '0 45%',
    paddingBottom: theme.spacer * 3,
    [theme.breakpoints.sm]: {
      flex: 'initial',
      paddingBottom: theme.spacer * 0,
      width: theme.spacer * 26.75
    }
  },
  image: {
    width: '100%'
  },
  name: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 1,
    color: theme.palette.black,
    fontSize: '23px',
    fontWeight: theme.fontWeights.medium,
    display: 'block'
  }
}))

export default useProjectStyles
