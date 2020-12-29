import { createUseStyles } from 'react-jss'

const usePaymentsNetworkStyles = createUseStyles(theme => ({
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
      padding: `${theme.spacing(17)}px ${theme.spacing(9)}px ${theme.spacing(17)}px`,
      flexDirection: 'row'
    }
  },
  section1: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(9.5),
    textAlign: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(19),
      paddingBottom: theme.spacing(26),
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
  list: {
    marginTop: theme.spacing(2),
    paddingInline: theme.spacing(2)
  },
  listItem: {
    color: theme.palette.gray.main,
    fontSize: theme.spacing(2),
    lineHeight: `${theme.spacing(3.5)}px`,
    paddingBottom: theme.spacing(1)
  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center'
  },
  section3Text: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(10.5)
    }
  },
  section4: {
    '& h3': {
      fontSize: '23px',
      marginBottom: theme.spacing(2.5)
    },
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      marginLeft: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5)
    }
  },
  section4Title: {
    marginBottom: theme.spacing(2)
  },
  section5: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    '& $col2': {
      marginLeft: 0
    }
  },
  section5Text: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    }
  },
  link: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.sm]: {
      marginBottom: 0
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(8)
    }
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-block'
    }
  }
}))

export default usePaymentsNetworkStyles
