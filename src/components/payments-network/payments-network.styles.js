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
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacer * 17}px ${theme.spacer * 9}px ${theme.spacer * 17}px`,
      flexDirection: 'row'
    }
  },
  section1: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingTop: theme.spacer * 8,
    paddingBottom: theme.spacer * 9.5,
    textAlign: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      paddingTop: theme.spacer * 19,
      paddingBottom: theme.spacer * 26,
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
  list: {
    marginTop: theme.spacer * 2,
    paddingInline: theme.spacer * 2
  },
  listItem: {
    color: theme.palette.gray.main,
    fontSize: theme.spacer * 2,
    lineHeight: `${theme.spacer * 3.5}px`,
    paddingBottom: theme.spacer * 1
  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center'
  },
  section3Text: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 3,
      marginBottom: theme.spacer * 10.5
    }
  },
  section4: {
    '& h3': {
      fontSize: '23px',
      marginBottom: theme.spacer * 2.5
    },
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      marginLeft: 'auto',
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5
    }
  },
  section4Title: {
    marginBottom: theme.spacer * 2
  },
  section5: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    '& $col2': {
      marginLeft: 0
    }
  },
  section5Text: {
    paddingTop: theme.spacer * 2,
    paddingBottom: theme.spacer * 4
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
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: 0
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 7,
      marginBottom: theme.spacer * 8
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
