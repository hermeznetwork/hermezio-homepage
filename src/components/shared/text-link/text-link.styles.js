import { createUseStyles } from 'react-jss'

const useTextLinkStyles = createUseStyles(theme => ({
  link: {
    color: theme.palette.orange.main,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.orange.dark
    }
  },
  linkIcon: {
    width: theme.spacer * 3,
    height: theme.spacer * 3,
    marginLeft: theme.spacer * 2,
    fill: theme.palette.orange.main,
    '&:hover': {
      fill: theme.palette.orange.dark
    }
  },
  boxLink: {
    padding: `${theme.spacer * 4}px ${theme.spacer * 5}px`,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.gray.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '29px',
    height: theme.spacer * 16,
    marginTop: theme.spacer * 0,
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 8,
      marginBottom: theme.spacer * 9
    },
    '&:hover': {
      backgroundColor: theme.palette.gray.dark
    }
  },
  boxLinkText: {
    width: theme.spacer * 17.5,
    paddingRight: theme.spacer * 2
  }
}))

export default useTextLinkStyles
