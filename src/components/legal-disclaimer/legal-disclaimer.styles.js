import { createUseStyles } from 'react-jss'

const useLegalDisclaimerStyles = createUseStyles(theme => ({
  section: {
    background: theme.palette.primary.light,
    color: theme.palette.gray.light,
    padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5)
  },
  paragraphMargin: {
    marginBottom: theme.spacing(2)
  }
}))

export default useLegalDisclaimerStyles
