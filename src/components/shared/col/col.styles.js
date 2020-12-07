import { createUseStyles } from 'react-jss'

const useColStyles = createUseStyles(theme => ({
  col: {
    '&:last-child': {
      [theme.breakpoints.sm]: {

      }
    }
  },
  link: {
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export default useColStyles
