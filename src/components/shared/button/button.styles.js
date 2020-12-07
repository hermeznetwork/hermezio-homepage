import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles(theme => ({
  root: {
    border: 'none',
    padding: theme.spacing(0.75),
    borderRadius: 50,
    background: theme.palette.orange.main,
    color: theme.palette.white,
    cursor: 'pointer',
    lineHeight: `${theme.spacing(1)}px`,
    marginRight: theme.spacing(0.5),
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      background: theme.palette.primary.dark
    }
  }
}))

export default useButtonStyles
