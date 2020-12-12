import { createUseStyles } from 'react-jss'

const usePaymentsNetworkStyles = createUseStyles(theme => ({
  section: {
    padding: '96px 72px'
  },
  section1: {
    paddingTop: '320px',
    backgroundColor: '#f6f7fa',
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

  },
  section3: {

  },
  section3Text: {
    backgroundColor: '#f6f7fa'
  },
  section4: {

  },
  section5: {
    backgroundColor: '#f6f7fa'
  },
  row: {
    display: 'flex'
  },
  col23: {
    width: '67%'
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
  divider: {
    width: '100%',
    height: '1px',
    background: '#dee0e9'
  }
}))

export default usePaymentsNetworkStyles
