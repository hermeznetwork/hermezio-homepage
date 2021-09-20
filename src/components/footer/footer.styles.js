import { createUseStyles } from 'react-jss'

export const useFooterStyles = createUseStyles(theme => ({
  footer: {
    background: theme.palette.black,
    color: theme.palette.gray.lighter,
    fontSize: theme.spacer * 2 - 1,
    lineHeight: `${theme.spacer * 3 - 1}px`
  },
  content: {
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%',
    padding: `${theme.spacer * 11}px ${theme.spacer * 6}px ${theme.spacer * 6}px`
  },
  topSection: {
    [theme.breakpoints.md]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    },
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacer * 12
  },
  col3: {
    display: 'flex',
    [theme.breakpoints.md]: {
      width: '33%'
    }
  },
  head: {
    [theme.breakpoints.md]: {
      marginRight: '50%'
    },
    marginBottom: theme.spacer * 4,
    '& :first-child, & :last-child': {
      color: theme.palette.white
    },
    '& :first-child': {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.spacer * 3,
      lineHeight: `${theme.spacer * 4 - 1}px`
    },
    '& > *': {
      lineHeight: `${theme.spacer * 3}px`,
      marginBottom: theme.spacer * 0.5,
      [theme.breakpoints.md]: {
        marginBottom: theme.spacer
      }
    }
  },
  listCol: {
    display: 'flex',
    [theme.breakpoints.md]: {
      display: 'contents'
    }
  },
  list: {
    listStyle: 'none',
    margin: 0,
    marginBottom: theme.spacer * 4,
    width: '45%',
    '&:first-child': {
      marginRight: '10%'
    },
    [theme.breakpoints.md]: {
      marginRight: theme.spacer * 13,
      width: 'auto',
      '&:last-child, &:first-child': {
        marginRight: 0
      }
    }
  },
  listItemHead: {
    color: theme.palette.white,
    fontWeight: theme.fontWeights.bold
  },
  listItem: {
    lineHeight: `${theme.spacer * 3}px`,
    paddingBottom: theme.spacer,
    '&:hover': {
      color: theme.palette.white
    }
  },
  logoAndText: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    },
    color: theme.palette.gray.main,
    display: 'flex'
  },
  text: {
    marginTop: theme.spacer * 2.5,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      marginTop: 0
    },
    marginLeft: theme.spacer * 0.5
  },
  legalLink: {
    textDecoration: 'none',
    color: theme.palette.gray.main
  },
  emailLink: {
    '&:hover': {
      color: theme.palette.purple.main
    }
  }
}))
