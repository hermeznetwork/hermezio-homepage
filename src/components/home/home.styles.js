import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
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
  col3: {
    [theme.breakpoints.sm]: {
      width: '33%'
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacer * 12}px ${theme.spacer * 9}px`,
      flexDirection: 'row'
    }
  },
  section1: {
    backgroundImage: 'url(./home-background.png)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    display: 'flex',
    paddingTop: theme.spacer * 11,
    textAlign: 'center',
    height: theme.spacer * 85,
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacer * 40,
      textAlign: 'left',
      height: 'auto'
    },
    '& $col3': {
      marginLeft: 0
    }
  },
  section1Text: {
    color: theme.palette.black,
    marginTop: theme.spacer * 2
  },
  section1Image1: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100vw'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.sm]: {
      justifyContent: 'left'
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.black
  },
  section2Title: {
    textAlign: 'center',
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacer * 4.25,
      lineHeight: `${theme.spacer * 5.75}px`,
      marginBottom: theme.spacer * 13
    }
  },
  section2Box: {
    textAlign: 'center',
    marginTop: theme.spacer * 5,
    [theme.breakpoints.sm]: {
      marginTop: 0
    }
  },
  section2Image1: {
    width: '142px',
    height: '147px'
  },
  section2Image2: {
    width: '162px',
    height: '147px'
  },
  section2Image3: {
    width: '141px',
    height: '147px'
  },
  section2Text: {
    width: '245px',
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    margin: `${theme.spacer * 3}px auto 0`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacer * 3 - 1,
      lineHeight: `${theme.spacer * 4.5 - 1}px`,
      margin: `${theme.spacer * 6.25}px auto 0`
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light
  },
  section3Text: {
    color: theme.palette.gray.light,
    lineHeight: '29px',
    margin: `${theme.spacer * 3}px 0`
  },
  section4: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        margin: `${theme.spacer * 7}px 0 ${theme.spacer * 8}px auto`
      }
    }
  },
  section4Title: {
    marginBottom: theme.spacer * 2
  },
  section4BoxWrapper: {
    marginTop: theme.spacer * 5,
    [theme.breakpoints.sm]: {
      marginTop: 'inherit'
    }
  },
  section4Box: {
    marginTop: 0,
    [theme.breakpoints.sm]: {
      marginRight: theme.spacer * 4,
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  section5: {
    backgroundColor: theme.palette.primary.light
  },
  section5Text: {
    marginTop: theme.spacer * 3,
    marginBottom: theme.spacer * 6
  },
  barText: {
    color: theme.palette.black
  },
  barHighlightedText: {
    fontWeight: theme.fontWeights.bold
  },
  barL1: {
    borderRadius: 15,
    height: theme.spacer * 2,
    background: theme.palette.black,
    marginTop: theme.spacer * 1.5,
    marginBottom: theme.spacer * 3,
    width: '100%'
  },
  barL2: {
    borderRadius: 15,
    height: theme.spacer * 2,
    background: theme.palette.orange.main,
    marginTop: theme.spacer * 1.5,
    width: '10%'
  },
  section6: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        marginTop: theme.spacer * 7,
        marginBottom: theme.spacer * 8
      }
    }
  },
  section6Title: {
    marginBottom: theme.spacer * 2
  },
  section6link: {
    marginTop: theme.spacer * 2.25,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 3.25
    }
  },
  section7: {
    backgroundColor: theme.palette.primary.light,
    '& $divider': {
      [theme.breakpoints.sm]: {
        marginTop: theme.spacer * 4,
        marginBottom: theme.spacer * 5
      }
    }
  },
  allBlogPostsLink: {
    marginLeft: 0,
    [theme.breakpoints.sm]: {
      marginLeft: 'auto',
      width: '50%'
    }
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
  },
  dividerFullWidth: {
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 9,
      marginBottom: theme.spacer * 16
    }
  },
  paragraphMargin: {
    marginBottom: 16
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: theme.spacer * 7,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 12
    }
  },
  blogTitle: {
    color: theme.palette.black,
    fontSize: '23px',
    fontWeight: theme.fontWeights.medium,
    lineHeight: '35px',
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
    marginTop: theme.spacer * 3.25
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-grid'
    }
  }
}))

export default useHomeStyles
