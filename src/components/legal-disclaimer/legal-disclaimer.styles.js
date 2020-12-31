import { createUseStyles } from 'react-jss'

const useLegalDisclaimerStyles = createUseStyles(theme => ({
  section: {
    padding: `0 ${theme.spacer * 4 - 3}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    [theme.breakpoints.sm]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 9}px`
    },
    background: theme.palette.primary.light,
    color: theme.palette.gray.light
  },
  content: {
    [theme.breakpoints.xl]: {
      width: '1020px'
    },
    margin: 'auto',
    width: '100%'
  },
  title: {
    paddingTop: theme.spacer * 10,
    marginBottom: theme.spacer * 5
  },
  paragraphMargin: {
    marginBottom: theme.spacer * 2
  }
}))

export default useLegalDisclaimerStyles
