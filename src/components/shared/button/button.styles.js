import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles(theme => ({
  root: {
    padding: `${theme.spacer * 3.25}px ${theme.spacer * 3.5}px`,
    lineHeight: `${theme.spacer * 2.25}px`,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 20,
    cursor: 'pointer',
    width: 'fit-content',
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
    marginTop: theme.spacer * 5,
    display: 'block',
    '&:hover': {
      border: `1px solid ${theme.palette.orange.dark}`,
      background: theme.palette.orange.dark
    }
  },
  secondary: {
    padding: `${theme.spacer * 3.5}px ${theme.spacer * 4}px`,
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
