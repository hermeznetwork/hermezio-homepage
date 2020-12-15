import { createUseStyles } from 'react-jss'

const useTitleStyles = createUseStyles(theme => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacing(4.25),
    lineHeight: `${theme.spacing(5.25)}px`,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal'
  }
}))

export default useTitleStyles
