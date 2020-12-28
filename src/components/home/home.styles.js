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
      margin: 'auto',
      width: '33%'
    }
  },
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
    }
  },
  section1: {
    backgroundImage: 'url(./home-background.png)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    display: 'flex',
    paddingTop: theme.spacing(11),
    textAlign: 'center',
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacing(40),
      textAlign: 'left'
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
    '& >:first-child': {
      textAlign: 'center',
      marginBottom: '106px'
    },
    '& >:last-child': {
      margin: '124px auto 0',
      height: '42px'
    },
    '& >div div': {
      textAlign: 'center'
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
    margin: '50px auto 0',
    fontWeight: theme.fontWeights.medium,
    fontSize: '23px',
    lineHeight: '35px'
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
      margin: `${theme.spacing(7)}px 0 ${theme.spacing(8)}px`
    },
    '& $col2': { // TODO refactor all inheritance
      color: theme.palette.gray.light,
      lineHeight: '29px'
    },
    '& $col3': {
      marginTop: 0,
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
      margin: `${theme.spacing(7)}px 0 ${theme.spacing(8)}px`,
      width: '50%',
      marginLeft: 'auto'
    },
    '& $col2': { // TODO refactor all inheritance
      color: theme.palette.gray.light,
      lineHeight: '29px'
    },
    '& $col3': {
      marginTop: 0,
      marginRight: theme.spacing(7.5),
      '&:last-child': {
        marginRight: 0
      }
    },
    '& h3': {
      color: theme.palette.black,
      fontSize: '23px',
      fontWeight: theme.fontWeights.medium,
      lineHeight: '35px',
      marginTop: 0
    },
    '& a': {
      marginTop: theme.spacing(3.25)
    }
  },
  section7: {
    backgroundColor: theme.palette.primary.light,
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(5)}px auto`
    },
    '& >div': {
      '&:last-child': {
        width: '50%',
        marginLeft: 'auto'
      }
    },
    '& $col2': { // TODO refactor all inheritance
      color: theme.palette.gray.light,
      lineHeight: '29px'
    },
    '& $col3': {
      marginTop: 0,
      marginRight: theme.spacing(7.5),
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.sm]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(16)
    }
  },
  paragraphMargin: {
    marginBottom: 16
  },
  webOnly: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-grid'
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
  }
}))

export default useHomeStyles
