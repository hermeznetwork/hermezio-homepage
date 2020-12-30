import { createUseStyles } from 'react-jss'

export const useMobileMenuStyles = createUseStyles(theme => ({
  background: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: theme.palette.black,
    opacity: 0.2,
    [theme.breakpoints.md]: {
      display: 'none'
    }
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: theme.palette.white,
    padding: `0 ${theme.spacer * 2}px`,
    display: 'flex',
    flexDirection: 'column',
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.sm]: {
      width: theme.spacer * 50,
      right: 'auto',
      padding: `0 ${theme.spacer * 8}px`
    },
    [theme.breakpoints.md]: {
      display: 'none'
    }
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacer * 3
  },
  title: {
    margin: 0
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    color: theme.palette.black,
    '&:focus': {
      outline: 'none'
    }
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    marginTop: theme.spacer * 2,
    paddingLeft: 0,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 4
    }
  },
  linkWrapper: {
    display: 'flex'
  },
  link: {
    textDecoration: 'none',
    width: '100%',
    padding: theme.spacer * 2,
    color: theme.palette.black,
    fontSize: theme.spacer * 3.5,
    lineHeight: `${theme.spacer * 4.5}px`
  },
  activeLink: {
    color: theme.palette.orange.main
  }
}))
