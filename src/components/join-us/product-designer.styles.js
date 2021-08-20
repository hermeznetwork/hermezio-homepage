import { createUseStyles } from 'react-jss'

const useProductDesignerStyles = createUseStyles(theme => ({
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
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 3.5}px ${theme.spacer * 2.5}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%'
  },
  section1: {
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 24
    }
  },
  actionButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonWrapper: {
    marginTop: theme.spacer * -5
  },
  paragraphMargin: {
    marginBottom: theme.spacer * 2
  },
  lastSection: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useProductDesignerStyles
