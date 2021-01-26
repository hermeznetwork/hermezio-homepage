import { createUseStyles } from 'react-jss'

const useCustom404Styles = createUseStyles(theme => ({
  section: {
    paddingRight: theme.spacer * 4 - 3,
    paddingLeft: theme.spacer * 2,
    [theme.breakpoints.md]: {
      paddingRight: 0,
      paddingLeft: 0
    },
    background: theme.palette.primary.light,
    color: theme.palette.gray.light,
    paddingTop: theme.spacer * 24,
    paddingBottom: theme.spacer * 36,
    textAlign: 'center'
  },
  content: {
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%'
  },
  title: {
    paddingTop: theme.spacer * 10,
    marginBottom: theme.spacer * 5
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useCustom404Styles
