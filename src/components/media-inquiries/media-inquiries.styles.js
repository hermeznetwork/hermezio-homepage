import { createUseStyles } from 'react-jss'

const useMediaInquiriesStyles = createUseStyles(theme => ({
  section: {
    background: theme.palette.primary.light,
    color: theme.palette.gray.light,
    paddingTop: theme.spacing(34),
    paddingBottom: theme.spacing(36),
    textAlign: 'center'
  },
  contentWrapper: {
    maxWidth: theme.spacing(75),
    margin: 'auto'
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  email: {
    color: theme.palette.orange
  }
}))

export default useMediaInquiriesStyles
