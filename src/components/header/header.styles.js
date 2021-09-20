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
    margin: `${theme.spacer * 1 + 2}px 0`,
    paddingLeft: 0,
    width: '100%',
    alignItems: 'center',
    fontWeight: theme.fontWeights.medium
  },
  linkWrapper: {
    paddingLeft: theme.spacer * 2,
    paddingRight: theme.spacer * 2,
    color: theme.palette.white,
    fontSize: theme.spacer * 2 - 1,
    textAlign: 'center',
    '&:first-child': {
      paddingLeft: 0,
      marginRight: 'auto'
    },
    '&:first-child a': {
      top: theme.spacer - 3,
      position: 'relative'
    },
    '&:last-child': {
      paddingTop: 0,
      paddingLeft: theme.spacer * 1
    },
    '&:last-child a': {
      background: 'rgba(157, 107, 255, 0.25)',
      borderRadius: 15,
      padding: `${theme.spacer * 0.5}px ${theme.spacer * 3 - 2}px`,
      '&:hover': {
        border: `2px solid ${theme.palette.primary.main}`
      },
      '&:hover::after': {
        width: 0
      }
    }
  },
  link: {
    display: 'flex',
    position: 'relative',
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
