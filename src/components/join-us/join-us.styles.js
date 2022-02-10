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
    '&:first-child': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      padding: `${theme.spacer * 17}px 0 ${theme.spacer * 16}px`,
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
    backgroundImage: 'url(../join-us-section1.png)',
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
    marginBottom: theme.spacer,
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 3
    }
  },
  section2: {
    paddingTop: theme.spacer * 5,
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 17
    }
  },
  title: {
    marginBottom: theme.spacer * 4,
    textAlign: 'center',
    [theme.breakpoints.md]: {
      marginBottom: theme.spacer * 10
    }
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
  benefits: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: theme.spacer * 4.5,
    listStyle: 'none'
  },
  benefitWrapper: {
    width: theme.spacer * 39.5,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacer * 4,
    borderRadius: '20px',
    backgroundColor: theme.palette.primary.light
  },
  benefitNumber: {
    backgroundColor: theme.palette.black,
    color: theme.palette.primary.light,
    marginBottom: theme.spacer * 2,
    width: theme.spacer * 3.5,
    height: theme.spacer * 3.5,
    textAlign: 'center',
    borderRadius: '20px'
  },
  benefitContent: {
    marginTop: `-${theme.spacer * 1.5}px`
  },
  department: {
    marginTop: theme.spacer * 3,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 8
    }
  },
  position: {
    marginTop: theme.spacer * 3,
    paddingBottom: theme.spacer * 4,
    '&:first-child': {
      marginTop: 0
    },
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 5,
      paddingBottom: theme.spacer * 4,
      '&:last-child': {
        paddingBottom: theme.spacer * 7
      }
    }
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    marginLeft: 'auto',
    width: '100%'
  },
  dividerFullWidth: {
    margin: `0 ${theme.spacer * 2}px`,
    width: 'auto',
    [theme.breakpoints.xl]: {
      width: theme.spacer * 127.5,
      margin: 'auto'
    }
  }
}))

export default useJoinUsStyles
