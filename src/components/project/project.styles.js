import { createUseStyles } from 'react-jss'

const useProjectStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
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
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      textAlign: 'left'
    }
  },
  section1img: {
    backgroundImage: 'url(../project-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '384px',
    [theme.breakpoints.md]: {
      height: '600px'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.md]: {
      justifyContent: 'left'
    }
  },
  section2: {
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 12,
      paddingBottom: theme.spacer * 9
    }
  },
  title: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      marginBottom: 'inherit'
    }
  },
  videoTitle: {
    fontSize: theme.spacer * 3.5,
    lineHeight: `${theme.spacer * 4.5}px`,
    marginBottom: theme.spacer * 3,
    textAlign: 'center',
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 5.5,
      textAlign: 'left'
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
      marginBottom: theme.spacer * 5,
      width: '50%'
    }
  },
  dividerFullWidth: {
    width: '100%',
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 10,
      marginBottom: theme.spacer * 8
    }
  },
  profilesTitle: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      marginBottom: 0
    }
  },
  profilesRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.md]: {
      flexWrap: 'initial',
      paddingTop: theme.spacer * 7
    }
  },
  profile: {
    flex: '0 45%',
    paddingBottom: theme.spacer * 3,
    [theme.breakpoints.md]: {
      flex: 'initial',
      paddingBottom: 0,
      width: '22.5%'
    }
  },
  image: {
    width: '100%'
  },
  name: {
    color: theme.palette.black,
    display: 'block',
    marginTop: theme.spacer * 1.5,
    fontSize: theme.spacer * 2,
    lineHeight: `${theme.spacer * 2.5}px`,
    fontWeight: theme.fontWeights.medium,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 2,
      marginBottom: theme.spacer * 0.5,
      fontSize: theme.spacer * 3 - 1
    }
  },
  role: {
    fontSize: theme.spacer * 2 - 1,
    lineHeight: `${theme.spacer * 2.25}px`,
    letterSpacing: 0,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 2 + 1,
      lineHeight: `${theme.spacer * 4 - 3}px`
    }
  }
}))

export default useProjectStyles
