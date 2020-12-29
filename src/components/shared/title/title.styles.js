import { createUseStyles } from 'react-jss'

const useTitleStyles = createUseStyles(theme => ({
  title: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacing(4.25),
    lineHeight: `${theme.spacing(5.25)}px`,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: theme.palette.black,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(3.5),
      lineHeight: `${theme.spacing(4.5)}px`
    }
  },
  titleSecondary: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacing(2.5),
    lineHeight: `${theme.spacing(4)}px`,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(3) - 1,
      marginBottom: theme.spacing(2.5)
    }
  },
  titleTertiary: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacing(3),
    lineHeight: 'inherit',
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(2.5),
      lineHeight: `${theme.spacing(4)}px`
    }
  }
}))

export default useTitleStyles
