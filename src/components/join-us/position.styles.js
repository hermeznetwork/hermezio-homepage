import { createUseStyles } from 'react-jss'

const useProductDesignerStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  col2: {
    [theme.breakpoints.md]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  section: {
    padding: `0 ${theme.spacer * 2}px 0 ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer}px ${theme.spacer * 2.5}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%',
    '& strong': {
      fontSize: theme.spacer * 2.12,
      color: theme.palette.black
    }
  },
  section1: {
    paddingTop: theme.spacer * 10,
    paddingBottom: theme.spacer * 4,
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 24
    }
  },
  actionButton: {
    [theme.breakpoints.md]: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: theme.spacer * 9,
    marginTop: theme.spacer * 2,
    padding: `${theme.spacer * 2}px ${theme.spacer * 8}px`,
    border: `1px solid ${theme.palette.purple.main}`,
    background: theme.palette.purple.main,
    color: theme.palette.white,
    fontWeight: theme.fontWeights.bold,
    cursor: 'pointer',
    borderRadius: 20,
    '&:hover': {
      border: `1px solid ${theme.palette.purple.dark}`,
      background: theme.palette.purple.dark
    },
    '&:disabled': {
      background: theme.palette.gray.main,
      border: `1px solid ${theme.palette.gray.main}`,
      cursor: 'auto'
    },
    [theme.breakpoints.md]: {
      marginTop: 0
    }
  },
  paragraphMargin: {
    marginBottom: theme.spacer * 2,
    '& a': {
      fontWeight: theme.fontWeights.medium,
      color: theme.palette.purple.main
    }
  },
  lastSection: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacer * 4,
    paddingBottom: theme.spacer * 4
  },
  list: {
    paddingLeft: theme.spacer * 2.5,
    paddingBottom: theme.spacer * 2
  }
}))

export default useProductDesignerStyles
