import { createUseStyles } from 'react-jss'

const useVideoStyles = createUseStyles(theme => ({
  videoWrapper: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 27,
    padding: theme.spacer * 2.5,
    display: 'flex',
    [theme.breakpoints.md]: {
      borderRadius: 93,
      padding: theme.spacer * 9,
      margin: 'auto'
    }
  },
  video: {
    margin: 'auto',
    height: `calc((100vw - ${theme.spacer * 9}px) / 16 * 9)`, // video aspect ratio is 16/9
    width: `calc(100vw - ${theme.spacer * 9}px)`, // total paddings 9 = 2+2+2.5+2.5
    [theme.breakpoints.md]: {
      height: '363px',
      width: '626px'
    },
    [theme.breakpoints.lg]: {
      height: '473px',
      width: '850px'
    },
    [theme.breakpoints.xl]: {
      height: '490px',
      width: '878px'
    }
  }
}))

export default useVideoStyles
