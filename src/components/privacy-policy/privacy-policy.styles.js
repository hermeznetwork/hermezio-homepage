import { createUseStyles } from 'react-jss'

const usePrivacyPolicyStyles = createUseStyles(theme => ({
  section: {
    padding: `0 ${theme.spacer * 4 - 3}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 9}px`
    },
    background: theme.palette.primary.light,
    color: theme.palette.gray.light
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
  subtitle: {
    marginTop: theme.spacer * 1.5
  },
  paragraphMargin: {
    marginBottom: theme.spacer * 4
  },
  list: {
    marginLeft: theme.spacer * 2,
    marginTop: theme.spacer
  },
  listBullet: {
    '&:not(last-of-type)': {
      marginBottom: theme.spacer
    }
  },
  mail: {
    color: theme.palette.orange.main
  }
}))

export default usePrivacyPolicyStyles
