import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles(theme => ({
  root: {
    padding: `${theme.spacing(3.25)}px ${theme.spacing(3.5)}px`,
    lineHeight: `${theme.spacing(2.25)}px`,
    fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    marginLeft: ({ marginLeft }) => marginLeft,
    borderRadius: 20,
    cursor: 'pointer',
    width: 'fit-content',
    height: '70px',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    }
  },
  icon: {
    width: '13px',
    height: '12px',
    marginLeft: '12px'
  },
  primary: {
    border: `1px solid ${theme.palette.orange.main}`,
    background: theme.palette.orange.main,
    color: theme.palette.white,
    marginTop: theme.spacing(5),
    display: 'block',
    '&:hover': {
      border: `1px solid ${theme.palette.orange.dark}`,
      background: theme.palette.orange.dark
    }
  },
  secondary: {
    padding: `${theme.spacing(3.5)}px ${theme.spacing(4)}px`,
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.white,
    color: theme.palette.gray.main,
    '&:hover': {
      border: `1px solid ${theme.palette.black}`,
      color: theme.palette.black
    }
  }
}))

export default useButtonStyles
