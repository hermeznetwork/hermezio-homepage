import { createUseStyles } from 'react-jss'

const useJoinUsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  rowReverse: {
    [theme.breakpoints.md]: {
      flexDirection: 'row-reverse'
    }
  },
  col23: {
    [theme.breakpoints.md]: {
      width: '67%'
    }
  },
  col2: {
    [theme.breakpoints.md]: {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  col3: {
    [theme.breakpoints.md]: {
      margin: 'auto',
      width: '33%'
    }
  },
  sectionWrapper: {
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 2.5}px`,
      flexDirection: 'row'
    },
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5
    },
    margin: 'auto',
    width: '100%'
  },
  section1: {
    textAlign: 'center',
    '& $col2': {
      textAlign: 'left'
    },
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 20
    }
  },
  section1img: {
    backgroundImage: 'url(./join-us-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '288px',
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      height: '384px'
    }
  },
  section1Title: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 3
    }
  },
  section2: {
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 12,
      paddingBottom: theme.spacer * 9
    }
  },
  title: {
    marginBottom: theme.spacer * 12,
    textAlign: 'center'
  },
  videoTitle: {
    marginBottom: theme.spacer * 3,
    textAlign: 'center',
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 5.5
    }
  },
  subTitle: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 1,
    [theme.breakpoints.md]: {
      marginTop: 0,
      marginBottom: theme.spacer * 2.5
    }
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    marginLeft: 'auto',
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 3,
    width: '100%',
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5
    }
  },
  dividerFullWidth: {
    width: '100%',
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 10,
      marginBottom: theme.spacer * 8
    }
  }
}))

export default useJoinUsStyles
