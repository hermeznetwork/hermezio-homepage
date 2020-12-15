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
    display: 'flex',
    '& div:first-child': {
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
    '& ul': {
      listStyle: 'none',
      margin: 0
    },
    '& ul li': {
      lineHeight: `${theme.spacing(3)}px`,
      paddingBottom: theme.spacing(1)
    },
    '& ul li:first-child': {
      color: theme.palette.white,
      fontWeight: theme.fontWeights.bold,
      paddingBottom: theme.spacing(2)
    }
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(12)
  },
  copyrightText: {
    color: theme.palette.gray.main
  },
  legalLink: {
    textDecoration: 'none',
    color: theme.palette.gray.main
  }
}))
