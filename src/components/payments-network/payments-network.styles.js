import { createUseStyles } from 'react-jss'

const usePaymentsNetworkStyles = createUseStyles(theme => ({
  section: {
    padding: '96px 72px',
    [theme.breakpoints.sm]: {
      padding: '96px 72px'
    }
  },
  section1: {
    paddingTop: '86px',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    '& $content': {
      marginRight: 'auto',
      marginLeft: 0
    },
    '& $buttonLink': {
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
    textAlign: 'center',
    '& p': {
      color: theme.palette.gray.light
    }
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
      width: '50%',
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
  buttonLink: {
    padding: `${theme.spacing(3)}px ${theme.spacing(3.5)}px`,
    lineHeight: '18px',
    fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    borderRadius: 20,
    cursor: 'pointer',
    width: 'fit-content',
    height: '70px',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    }
  },
  buttonLinkIcon: {
    width: '13px',
    height: '12px',
    marginLeft: '12px'
  },
  primary: {
    border: `1px solid ${theme.palette.orange}`,
    background: theme.palette.orange,
    color: theme.palette.white,
    marginTop: theme.spacing(5),
    display: 'block'
  },
  link: {
    color: theme.palette.orange,
    display: 'flex',
    alignItems: 'center'
  },
  linkIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(2)
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main
  }
}))

export default usePaymentsNetworkStyles
