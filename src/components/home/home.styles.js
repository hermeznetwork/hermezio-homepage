import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
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
  col3: {
    [theme.breakpoints.md]: {
      width: '33%'
    }
  },
  sectionWrapper: {
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section1Wrapper: {
    backgroundImage: 'url(./home-background-mobile.png)',
    [theme.breakpoints.md]: {
      backgroundImage: 'url(./home-background.svg)'
    },
    backgroundPosition: 'bottom',
    backgroundSize: 'cover'
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
    paddingTop: theme.spacer * 11,
    textAlign: 'center',
    height: theme.spacer * 89,
    [theme.breakpoints.md]: {
      paddingTop: theme.spacer * 27.25,
      paddingBottom: theme.spacer * 20,
      textAlign: 'left',
      height: theme.spacer * 103
    },
    '& $col3': {
      marginLeft: 0
    }
  },
  section1Text: {
    color: theme.palette.black,
    marginTop: theme.spacer * 2
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.md]: {
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
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 4.25,
      lineHeight: `${theme.spacer * 5.75}px`,
      marginBottom: theme.spacer * 13
    }
  },
  section2Box: {
    textAlign: 'center',
    marginTop: theme.spacer * 5,
    [theme.breakpoints.md]: {
      marginTop: 0
    }
  },
  section2_1img: {
    backgroundImage: 'url(./home-section2_1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '142px',
    height: '147px'
  },
  section2_2img: {
    backgroundImage: 'url(./home-section2_2.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '162px',
    height: '147px'
  },
  section2_3img: {
    backgroundImage: 'url(./home-section2_3.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '141px',
    height: '147px'
  },
  section2Text: {
    width: '245px',
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    margin: `${theme.spacer * 3}px auto 0`,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3 - 1,
      lineHeight: `${theme.spacer * 4.5 - 1}px`,
      margin: `${theme.spacer * 6.25}px auto 0`
    }
  },
  section3img: {
    backgroundImage: 'url(./home-section3.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.md]: {
      height: '390px'
    }
  },
  section3Text: {
    color: theme.palette.gray.light,
    margin: `${theme.spacer * 3}px 0`
  },
  section4: {
    '& $divider': {
      [theme.breakpoints.md]: {
        marginTop: theme.spacer * 7,
        marginBottom: theme.spacer * 8
      }
    }
  },
  section4Title: {
    marginBottom: theme.spacer * 2
  },
  section4BoxWrapper: {
    marginTop: theme.spacer * 5,
    [theme.breakpoints.md]: {
      marginTop: 'inherit',
      flexDirection: 'row'
    }
  },
  section4Box: {
    marginTop: 0,
    [theme.breakpoints.md]: {
      marginRight: theme.spacer * 4,
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  section5img: {
    backgroundImage: 'url(./home-section5.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.md]: {
      height: '385px'
    }
  },
  section5Text: {
    marginTop: theme.spacer * 3,
    marginBottom: theme.spacer * 6
  },
  barText: {
    color: theme.palette.black,
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
      [theme.breakpoints.md]: {
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
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 3.25
    }
  },
  section7: {
    '& $divider': {
      [theme.breakpoints.md]: {
        marginTop: theme.spacer * 4,
        marginBottom: theme.spacer * 5
      }
    }
  },
  allBlogPostsLink: {
    marginLeft: 0,
    [theme.breakpoints.md]: {
      marginLeft: 'auto',
      width: '50%'
    }
  },
  section8: {
    textAlign: 'center',
    '& $col2': {
      textAlign: 'left'
    }
  },
  section8Text: {
    margin: `${theme.spacer * 3}px auto ${theme.spacer * 10}px`
  },
  section8img: {
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.md]: {
      height: '684px'
    }
  },
  section8SubTitle: {
    marginTop: theme.spacer * 8,
    marginBottom: theme.spacer * 4,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 16,
      marginBottom: theme.spacer * 8
    }
  },
  boxes: {
    [theme.breakpoints.md]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  boxWrapper: {
    [theme.breakpoints.md]: {
      width: '30%',
      margin: 0
    }
  },
  box: {
    background: theme.palette.primary.light,
    borderRadius: 20,
    fontSize: theme.spacer * 3 - 1,
    lineHeight: `${theme.spacer * 4.5 - 1}px`,
    color: theme.palette.black,
    padding: theme.spacer * 6,
    textAlign: 'left',
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      marginBottom: 0,
      minHeight: theme.spacer * 26.5,
      padding: `${theme.spacer * 4}px ${theme.spacer * 7.5}px ${theme.spacer * 5}px ${theme.spacer * 6}px `
    }
  },
  highlightedText: {
    fontSize: theme.spacer * 4.25,
    fontWeight: theme.fontWeights.bold
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
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 12
    }
  },
  blogHeaderCol: {
    display: 'flex',
    alignItems: 'center'
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
  inlineGraphicText: {
    [theme.breakpoints.md]: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  },
  inlineGraphicImage: {
    [theme.breakpoints.md]: {
      maxHeight: theme.spacer * 48
    }
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.md]: {
      display: 'block'
    }
  }
}))

export default useHomeStyles
