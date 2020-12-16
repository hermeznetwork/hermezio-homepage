import { createUseStyles } from 'react-jss'

export const useFooterStyles = createUseStyles(theme => ({
  footer: {
    background: theme.palette.black,
    color: theme.palette.gray.lighter,
    fontSize: '15px',
    lineHeight: '23px'
  },
  content: {
    width: '100%',
    padding: `${theme.spacing(11)}px ${theme.spacing(6)}px ${theme.spacing(6)}px`
  },
  topSection: {
    display: 'flex'
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(12)
  },
  head: {
    maxWidth: 'calc(100vw/5)', // TODO: update when Chami sends new design
    marginRight: 'auto',
    '& :first-child, & :last-child': {
      color: theme.palette.white
    },
    '& :first-child': {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.spacing(3),
      lineHeight: `${theme.spacing(4)}px`
    },
    '& > *': {
      lineHeight: `${theme.spacing(3)}px`,
      marginBottom: theme.spacing(2)
    }
  },
  list: {
    listStyle: 'none',
    margin: 0
  },
  listItem: {
    lineHeight: `${theme.spacing(3)}px`,
    '& :first-child': {
      color: theme.palette.white,
      fontWeight: theme.fontWeights.bold,
      paddingBottom: theme.spacing(2)
    }
  },
  copyrightText: {
    color: theme.palette.gray.main
  },
  legalLink: {
    textDecoration: 'none',
    color: theme.palette.gray.main
  }
}))
