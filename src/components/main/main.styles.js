import { createUseStyles } from 'react-jss'

export const useMainStyles = createUseStyles(theme => ({
  [theme.breakpoints.sm]: {
    root: {
      padding: `0 ${theme.spacing(2)}`
    }
  }
}))
