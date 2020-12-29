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
    padding: `${theme.spacing(8)}px ${theme.spacing(2)}px ${theme.spacing(6)}px ${theme.spacing(2)}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`,
      flexDirection: 'row'
    }
  },
  section1: {
    backgroundImage: 'url(./home-background.png)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    display: 'flex',
    paddingTop: theme.spacing(11),
    textAlign: 'center',
    height: theme.spacing(85),
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacing(40),
      textAlign: 'left',
      height: 'auto'
    },
    '& $col3': {
      marginLeft: 0
    }
  },
  section1Text: {
    color: theme.palette.black,
    marginTop: theme.spacing(2)
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
    fontSize: theme.spacing(2.5),
    lineHeight: `${theme.spacing(4)}px`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(4.25),
      lineHeight: `${theme.spacing(5.75)}px`,
      marginBottom: theme.spacing(13)
    }
  },
  section2Box: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
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
    fontSize: theme.spacing(2.5),
    lineHeight: `${theme.spacing(4)}px`,
    margin: `${theme.spacing(3)}px auto 0`,
    [theme.breakpoints.sm]: {
      fontSize: theme.spacing(3) - 1,
      lineHeight: `${theme.spacing(4.5) - 1}px`,
      margin: `${theme.spacing(6.25)}px auto 0`
    }
  },
  section3: {
    backgroundColor: theme.palette.primary.light
  },
  section3Text: {
    color: theme.palette.gray.light,
    lineHeight: '29px',
    margin: `${theme.spacing(3)}px 0`
  },
  section4: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        margin: `${theme.spacing(7)}px 0 ${theme.spacing(8)}px auto`
      }
    }
  },
  section4Title: {
    marginBottom: theme.spacing(2)
  },
  section4BoxWrapper: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.sm]: {
      marginTop: 'inherit'
    }
  },
  section4Box: {
    marginTop: 0,
    [theme.breakpoints.sm]: {
      marginRight: theme.spacing(4),
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  section5: {
    backgroundColor: theme.palette.primary.light
  },
  section5Text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6)
  },
  barText: {
    color: theme.palette.black
  },
  barHighlightedText: {
    fontWeight: theme.fontWeights.bold
  },
  barL1: {
    borderRadius: 15,
    height: theme.spacing(2),
    background: theme.palette.black,
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    width: '100%'
  },
  barL2: {
    borderRadius: 15,
    height: theme.spacing(2),
    background: theme.palette.orange.main,
    marginTop: theme.spacing(1.5),
    width: '10%'
  },
  section6: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(8)
      }
    }
  },
  section6Title: {
    marginBottom: theme.spacing(2)
  },
  section6link: {
    marginTop: theme.spacing(2.25),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(3.25)
    }
  },
  section7: {
    backgroundColor: theme.palette.primary.light,
    '& $divider': {
      [theme.breakpoints.sm]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5)
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5),
      width: '50%'
    }
  },
  dividerFullWidth: {
    width: '100%',
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(16)
    }
  },
  paragraphMargin: {
    marginBottom: 16
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: theme.spacing(7),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(12)
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
    marginTop: theme.spacing(3.25)
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-grid'
    }
  }
}))

export default useHomeStyles
