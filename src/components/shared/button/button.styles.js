import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles(theme => ({
  root: {
    padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
    borderRadius: 20,
    cursor: 'pointer',
    width: '285px',
    height: '92px',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
  primary: {
    border: `1px solid ${theme.palette.orange}`,
    background: theme.palette.orange,
    color: theme.palette.white
  },
  secondary: {
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.white,
    color: theme.palette.gray.main
  }
}))

export default useButtonStyles
