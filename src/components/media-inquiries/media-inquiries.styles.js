import { createUseStyles } from 'react-jss'

const useMediaInquiriesStyles = createUseStyles(theme => ({
  section: {
    paddingRight: theme.spacer * 4 - 3,
    paddingLeft: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      paddingRight: 0,
      paddingLeft: 0
    },
    background: theme.palette.primary.light,
    color: theme.palette.gray.light,
    paddingTop: theme.spacer * 34,
    paddingBottom: theme.spacer * 36,
    textAlign: 'center'
  },
  content: {
    maxWidth: theme.spacer * 75,
    margin: 'auto'
  },
  title: {
    marginBottom: theme.spacer * 3
  },
  email: {
    color: theme.palette.orange.main,
    padding: `0 ${theme.spacer * 1}px`
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useMediaInquiriesStyles
