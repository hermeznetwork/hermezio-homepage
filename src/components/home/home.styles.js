import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  section: {
    padding: '96px 72px'
  },
  section1: {
    backgroundImage: 'url("../../assets/images/home/section1.svg")',
    display: 'flex',
    '& > div': {
      marginRight: 'auto',
      marginLeft: 0
    },
    '& > div a': {
      marginLeft: 0
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
    fontWeight: '500',
    fontSize: '23px',
    lineHeight: '35px'
  },
  section3: {
    backgroundColor: '#f6f7fa'
  },
  section3Text: {
    color: '#778499',
    lineHeight: '29px',
    margin: '24px 0'
  },
  section4: {
    '& >div': {
      paddingTop: '48px'
    },
    '& $col2': { // TODO refactor all inheritance
      color: '#778499',
      lineHeight: '29px'
    },
    '& $col3': {
      marginTop: 0,
      marginRight: '60px',
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  section5: {
    backgroundColor: '#f6f7fa'
  },
  section6: {
    '& >div': {
      paddingTop: '48px'
    },
    '& $col2': { // TODO refactor all inheritance
      color: '#778499',
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
      color: '#000',
      fontSize: '24px'
    },
    '& a': {
      marginTop: '26px'
    },
    '& $divider': {
      width: '50%',
      marginLeft: 'auto'
    }
  },
  section7: {
    backgroundColor: '#f6f7fa',
    '& >div': {
      paddingTop: '32px',
      '&:last-child': {
        width: '50%',
        marginLeft: 'auto'
      }
    },
    '& $col2': { // TODO refactor all inheritance
      color: '#778499',
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
      color: '#000',
      fontSize: '24px'
    },
    '& a': {
      marginTop: '26px'
    },
    '& $divider': {
      width: '50%',
      marginLeft: 'auto'
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
    // textAlign: 'center',
    width: '33%'
  },
  buttonLink: {
    padding: '26px 28px',
    fontWeight: '700',
    // padding: `${theme.spacing(3)}px ${theme.spacing(3.5)}px`,
    // fontWeight: theme.fontWeights.bold,
    margin: 'auto',
    borderRadius: 26,
    cursor: 'pointer',
    width: '204px',
    height: '70px',
    textAlign: 'center',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      // background: theme.palette.primary.dark
    }
  },
  buttonLinkIcon: {
    width: '13px',
    height: '12px',
    marginLeft: '12px'
  },
  primary: {
    border: '1px solid #e75a2b',
    background: '#e75a2b',
    color: 'white',
    marginTop: '40px',
    // border: `1px solid ${theme.palette.orange.main}`,
    // background: theme.palette.orange.main,
    // color: theme.palette.white,
    // marginTop: theme.spacing(5),
    display: 'block'
  },
  secondary: {
    border: '1px solid #dee0e9',
    background: 'white',
    color: '#667285'
    // border: `1px solid ${theme.palette.primary.main}`,
    // background: theme.palette.white,
    // color: theme.palette.gray.main
  },
  link: {
    color: '#e75a2b',
    display: 'flex',
    alignItems: 'center'
  },
  linkIcon: {
    width: '24px',
    height: '24px',
    marginLeft: '16px'
  },
  boxLink: {
    padding: '35px 32px 33px 40px',
    borderRadius: 20,
    backgroundColor: '#f6f7fa',
    color: '#667285',
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
    background: '#dee0e9'
  }
}))

export default useHomeStyles
