import { createUseStyles } from 'react-jss'

const useLegalDisclaimerStyles = createUseStyles(theme => ({
  section: {
    padding: `0 ${theme.spacing(4) - 3}px ${theme.spacing(6)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
    },
    background: theme.palette.primary.light,
    color: theme.palette.gray.light
  },
  title: {
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(5)
  },
  paragraphMargin: {
    marginBottom: theme.spacing(2)
  }
}))

export default useLegalDisclaimerStyles
