import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: `${theme.spacing(12)}px ${theme.spacing(9)}px`
    }
  },
  section1: {
    paddingTop: theme.spacing(11),
    [theme.breakpoints.sm]: {
      paddingTop: theme.spacing(40)
    },
    backgroundImage: 'url(./home-background.png)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    display: 'flex',
    '& > div': {
      marginRight: 'auto',
      marginLeft: 0
    },
    '& > div a': {
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
    fontWeight: 700
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
    background: theme.palette.orange,
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
      width: '50%',
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
  row: {
    display: 'flex'
  },
  col2: {
    width: '50%',
    marginLeft: 'auto'
  },
  col3: {
    margin: 'auto',
    width: '33%'
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main
  },
  paragraphMargin: {
    marginBottom: 16
  }
}))

export default useHomeStyles
