import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: '96px 72px'
    }
  },
  section1: {
    paddingTop: '86px',
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
    fontWeight: '500',
    fontSize: '23px',
    lineHeight: '35px'
  },
  section3: {
    backgroundColor: theme.palette.primary.light
  },
  section3Text: {
    color: theme.palette.gray.light,
    lineHeight: '29px',
    margin: '24px 0'
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
      marginRight: '60px',
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
      marginTop: '26px'
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
      marginRight: '60px',
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
      marginTop: '26px'
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
  buttonLink: {
    padding: `${theme.spacing(3.25)}px ${theme.spacing(3.5)}px`,
    lineHeight: '18px',
    fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    borderRadius: 20,
    cursor: 'pointer',
    width: 'fit-content',
    height: '70px',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    }
  },
  buttonLinkIcon: {
    width: '13px',
    height: '12px',
    marginLeft: '12px'
  },
  primary: {
    border: `1px solid ${theme.palette.orange}`,
    background: theme.palette.orange,
    color: theme.palette.white,
    marginTop: theme.spacing(5),
    display: 'block'
  },
  secondary: {
    padding: `${theme.spacing(3.5)}px ${theme.spacing(4)}px`,
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.white,
    color: theme.palette.gray.main
  },
  link: {
    color: theme.palette.orange,
    display: 'flex',
    alignItems: 'center'
  },
  linkIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(2)
  },
  boxLink: {
    padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.gray.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '29px',
    height: '128px',
    marginTop: '96px',
    marginBottom: '48px',
    '& >span': {
      width: '140px',
      paddingRight: '16px'
    }
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
