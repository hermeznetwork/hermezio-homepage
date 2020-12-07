import { createUseStyles } from 'react-jss'

export const useHeaderStyles = createUseStyles(theme => ({
  header: {
    height: theme.headerHeight
  },
  content: {
    width: '100%'
  },
  nav: {
    display: 'none',
    [theme.breakpoints.upMd]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  mobileMenu: {
    display: 'flex',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: theme.palette.black,
    padding: 0,
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.upMd]: {
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
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    paddingTop: theme.spacing(1.5),
    textAlign: 'center',
    '&:first-child': {
      paddingLeft: 0,
      marginRight: 'auto',
      fontWeight: 700,
      '&::before': {
        content: 'url(\'../../assets/images/logo.svg\')'
      }
    },
    '&:last-child': {
      border: `2px solid ${theme.palette.black}`,
      borderRadius: 15,
      padding: `${theme.spacing(1.5)}px ${theme.spacing(3.5)}px`
    },
    color: theme.palette.black,
    fontSize: theme.spacing(2),
    lineHeight: `${theme.spacing(2.5)}px`,
    '&::after': {
      position: 'absolute',
      height: '2px',
      bottom: 0,
      backgroundColor: theme.palette.black,
      width: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.25s ease',
      content: '\'\''
    }
  },
  link: {

  },
  activeLink: {

  }
}))
