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
  },
  buttonLink: {
    padding: `${theme.spacing(3.25)}px ${theme.spacing(3.5)}px`,
    lineHeight: '18px',
    fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    borderRadius: 20,
    cursor: 'pointer',
    width: 'fit-content',
    height: '70px',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    }
  },
  primary: {
    border: `1px solid ${theme.palette.orange}`,
    background: theme.palette.orange,
    color: theme.palette.white,
    marginTop: theme.spacing(5),
    display: 'block'
  }
}))

export default useMediaInquiriesStyles
