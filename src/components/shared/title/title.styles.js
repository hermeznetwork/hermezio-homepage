import { createUseStyles } from 'react-jss'

const useTitleStyles = createUseStyles(theme => ({
  title: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacer * 3.5,
    lineHeight: `${theme.spacer * 4.5}px`,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: theme.palette.black,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 4.25,
      lineHeight: `${theme.spacer * 5.25}px`
    }
  },
  titleSecondary: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    marginBottom: theme.spacer * 1,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3 - 1,
      marginBottom: theme.spacer * 2.5
    }
  },
  titleTertiary: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 3,
    lineHeight: 'inherit',
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 2.5,
      lineHeight: `${theme.spacer * 4}px`
    }
  },
  subtitle: {
    lineHeight: 'inherit',
    fontSize: theme.spacer * 2 + 1,
    marginTop: 0,
    marginBottom: theme.spacer
  }
}))

export default useTitleStyles
