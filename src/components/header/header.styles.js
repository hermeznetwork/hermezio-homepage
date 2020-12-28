import { createUseStyles } from 'react-jss'

export const useHeaderStyles = createUseStyles(theme => ({
  header: {
    position: 'absolute',
    width: '100%'
  },
  content: {
    width: '100%',
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px 0`
  },
  nav: {
    display: 'none',
    [theme.breakpoints.md]: {
      display: 'flex',
      alignItems: 'center'
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
    width: '100%'
  },
  linkWrapper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    textAlign: 'center',
    '&:first-child': {
      paddingLeft: 0,
      marginRight: 'auto'
    },
    '&:first-child a': {
      top: '-3px',
      position: 'relative'
    },
    '&:last-child': {
      display: 'none'// TODO: put it back once Wallet is released, so it can be linked
    },
    '&:last-child a': {
      border: `2px solid ${theme.palette.black}`,
      borderRadius: 15,
      padding: `${theme.spacing(1.5)}px ${theme.spacing(3.5)}px`,
      marginTop: theme.spacing(1.5)
    },
    color: theme.palette.black,
    fontSize: '15px',
    lineHeight: `${theme.spacing(2.5)}px`
  },
  link: {
    display: 'flex',
    position: 'relative',
    paddingBottom: theme.spacing(0.75),
    '&::after': {
      position: 'absolute',
      height: '2px',
      bottom: 0,
      backgroundColor: theme.palette.black,
      width: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.25s ease',
      content: '""'
    },
    '&:hover::after': {
      width: '100%'
    }
  }
}))
