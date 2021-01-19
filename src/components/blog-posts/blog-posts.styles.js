import { createUseStyles } from 'react-jss'

const useBlogPostsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    }
  },
  col2: {
    [theme.breakpoints.sm]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  blogTitle: {
    color: theme.palette.black,
    fontSize: theme.spacer * 3 - 1,
    fontWeight: theme.fontWeights.medium,
    lineHeight: `${theme.spacer * 4.5 - 1}px`,
    marginTop: 0,
    display: 'flex',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      height: '2px',
      bottom: 0,
      backgroundColor: theme.palette.black,
      width: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.25s ease',
      content: '""'
    },
    '&:hover::after': {
      width: '100%'
    }
  },
  blogLink: {
    marginTop: theme.spacer * 3.25,
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    marginLeft: 'auto',
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 3,
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5,
      width: '50%'
    }
  }
}))

export default useBlogPostsStyles
