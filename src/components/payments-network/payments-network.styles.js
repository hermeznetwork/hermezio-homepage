import { createUseStyles } from 'react-jss'

const usePaymentsNetworkStyles = createUseStyles(theme => ({
  section: {
    padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
  },
  section1: {
    paddingTop: theme.spacing(11),
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    '& $content': {
      marginRight: 'auto',
      marginLeft: 0
    }
  },
  section2: {
    '& $col2': {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    },
    '& li': {
      color: theme.palette.gray.main,
      fontSize: theme.spacing(2),
      lineHeight: `${theme.spacing(3.5)}px`,
      paddingBottom: theme.spacing(1)
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center'
  },
  section4: {
    '& >div': {
      paddingTop: theme.spacing(6)
    },
    '& $col2': { // TODO refactor all inheritance
      color: theme.palette.gray.light,
      lineHeight: '29px'
    },
    '& $col3': {
      marginTop: 0,
      marginRight: theme.spacing(7.5),
      '&:last-child': {
        marginRight: 0
      }
    },
    '& h3': {
      color: theme.palette.black,
      fontSize: '24px'
    },
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      marginLeft: 'auto'
    }
  },
  section5: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    '& p': {
      color: theme.palette.gray.light,
      lineHeight: '29px',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4)
    },
    '& div div': {
      display: 'flex'
    },
    '& a': {
      paddingRight: theme.spacing(10)
    },
    '& $col2': {
      marginLeft: 0
    }
  },
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
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main
  }
}))

export default usePaymentsNetworkStyles
