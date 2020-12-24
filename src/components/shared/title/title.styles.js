import { createUseStyles } from 'react-jss'

const useTitleStyles = createUseStyles(theme => ({
  title: {
    marginTop: ({ marginTop }) => marginTop || 0,
    marginBottom: ({ marginBottom }) => marginBottom || 0,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacing(4.25),
    lineHeight: `${theme.spacing(5.25)}px`,
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: theme.palette.black
  }
}))

export default useTitleStyles
