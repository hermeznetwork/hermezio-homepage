import { createUseStyles } from 'react-jss'

export const useHeaderStyles = createUseStyles(theme => ({
  header: {
    width: '100%',
    position: 'absolute',
    padding: `${theme.spacer * 2}px ${theme.spacer}px`,
    [theme.breakpoints.md]: {
      position: 'fixed',
      padding: 0
    }
  },
  content: {
    margin: 'auto',
    padding: `0 ${theme.spacer}px`,
    [theme.breakpoints.md]: {
      backgroundColor: theme.palette.black
    }
  },
  nav: {
    width: '100%',
    display: 'none',
    margin: 'auto',
    [theme.breakpoints.md]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    }
  },
  mobileMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: theme.palette.black,
    padding: 0,
    width: '100%',
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.md]: {
      display: 'none'
    }
  },
  linkList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
    width: '100%',
    alignItems: 'center',
    fontWeight: theme.fontWeights.medium
  },
  linkWrapper: {
    paddingLeft: theme.spacer * 2,
    paddingRight: theme.spacer * 2,
    paddingTop: theme.spacer * 1.5,
    textAlign: 'center',
    '&:first-child': {
      paddingLeft: 0,
      marginRight: 'auto'
    },
    '&:first-child a': {
      top: '-3px',
      position: 'relative'
    },
    color: theme.palette.white,
    fontSize: theme.spacer * 2 - 1,
    lineHeight: `${theme.spacer * 2.5}px`
  },
  link: {
    display: 'flex',
    position: 'relative',
    paddingBottom: theme.spacer * 0.75,
    '&::after': {
      position: 'absolute',
      height: '2px',
      bottom: 0,
      backgroundColor: theme.palette.white,
      width: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.25s ease',
      content: '""'
    },
    '&:hover::after': {
      width: '33%'
    }
  }
}))
