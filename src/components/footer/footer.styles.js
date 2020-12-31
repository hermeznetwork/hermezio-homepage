import { createUseStyles } from 'react-jss'

export const useFooterStyles = createUseStyles(theme => ({
  footer: {
    background: theme.palette.black,
    color: theme.palette.gray.lighter,
    fontSize: '15px',
    lineHeight: '23px'
  },
  content: {
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%',
    padding: `${theme.spacer * 11}px ${theme.spacer * 6}px ${theme.spacer * 6}px`
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
    marginTop: theme.spacer * 12
  },
  col3: {
    display: 'flex',
    [theme.breakpoints.sm]: {
      width: '33%'
    }
  },
  head: {
    [theme.breakpoints.sm]: {
      marginRight: '50%'
    },
    marginBottom: theme.spacer * 4,
    '& :first-child, & :last-child': {
      color: theme.palette.white
    },
    '& :first-child': {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.spacer * 3,
      lineHeight: `${theme.spacer * 4 - 1}px`
    },
    '& > *': {
      lineHeight: `${theme.spacer * 3}px`,
      marginBottom: theme.spacer * 0.5,
      [theme.breakpoints.sm]: {
        marginBottom: theme.spacer
      }
    }
  },
  list: {
    listStyle: 'none',
    margin: 0,
    marginBottom: theme.spacer * 4,
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
  listItemHead: {
    color: theme.palette.white,
    fontWeight: theme.fontWeights.bold
  },
  listItem: {
    lineHeight: `${theme.spacer * 3}px`,
    paddingBottom: theme.spacer,
    '&:hover': {
      color: theme.palette.white
    }
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
    marginTop: theme.spacer * 2.5,
    [theme.breakpoints.sm]: {
      marginTop: 0
    },
    marginLeft: theme.spacer * 0.5
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
