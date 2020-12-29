import { createUseStyles } from 'react-jss'

export const useFooterStyles = createUseStyles(theme => ({
  footer: {
    background: theme.palette.black,
    color: theme.palette.gray.lighter,
    fontSize: '15px',
    lineHeight: '23px'
  },
  content: {
    width: '100%',
    padding: `${theme.spacing(11)}px ${theme.spacing(6)}px ${theme.spacing(6)}px`
  },
  topSection: {
    [theme.breakpoints.sm]: {
      display: 'flex'
    }
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    },
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(12)
  },
  col3: {
    display: 'flex',
    [theme.breakpoints.sm]: {
      margin: 'auto',
      width: '33%'
    }
  },
  head: {
    [theme.breakpoints.sm]: {
      marginRight: '50%'
    },
    marginBottom: theme.spacing(4),
    '& :first-child, & :last-child': {
      color: theme.palette.white
    },
    '& :first-child': {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.spacing(3),
      lineHeight: `${theme.spacing(4) - 1}px`
    },
    '& > *': {
      lineHeight: `${theme.spacing(3)}px`,
      marginBottom: theme.spacing(2)
    }
  },
  list: {
    listStyle: 'none',
    margin: 0,
    marginBottom: theme.spacing(4),
    width: '45%',
    '&:first-child': {
      marginRight: '10%'
    },
    [theme.breakpoints.sm]: {
      width: '50%',
      '&:first-child': {
        marginRight: 0
      }
    }
  },
  listItem: {
    lineHeight: `${theme.spacing(3)}px`,
    '&:hover': {
      color: theme.palette.white
    }
  },
  listItemHead: {
    color: theme.palette.white,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: theme.spacing(2)
  },
  logoAndText: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    },
    color: theme.palette.gray.main,
    display: 'flex'
  },
  text: {
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.sm]: {
      marginTop: 0
    },
    marginLeft: theme.spacing(0.5)
  },
  legalLink: {
    textDecoration: 'none',
    color: theme.palette.gray.main
  },
  emailLink: {
    '&:hover': {
      color: theme.palette.orange.main
    }
  }
}))
