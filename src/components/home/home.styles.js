import { createUseStyles } from 'react-jss'

const useHomeStyles = createUseStyles(theme => ({
  section: {
    margin: '88px 0'
  },
  section1: {
    display: 'flex',
    '& > div': {
      marginRight: 'auto',
      marginLeft: 0
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'column',
    '& >:last-child': {
      margin: '152px auto 0'
    }
  },
  section3: {
  },
  section4: {
  },
  section5: {
  },
  section6: {
  },
  section7: {
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
    textAlign: 'center',
    width: '33%'
  },
  buttonLink: {
    // padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
    padding: '32px 40px',
    margin: 'auto',
    borderRadius: 26,
    cursor: 'pointer',
    width: '285px',
    height: '92px',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      // background: theme.palette.primary.dark
    }
  },
  primary: {
    // border: `1px solid ${theme.palette.orange.main}`,
    // background: theme.palette.orange.main,
    // color: theme.palette.white
  },
  secondary: {
    // border: `1px solid ${theme.palette.primary.main}`,
    // background: theme.palette.white,
    // color: theme.palette.gray.main
  }
}))

export default useHomeStyles

// primary: {
//     light: '#f6f7fa',
//     main: '#dee0e9'
//   },
//   white: '#ffffff',
//   black: '#2b2b2b',
//   gray: {
//     main: '#667285',
//     lighter: '#8d95a3'
//   },
//   orange: {
//     main: '#e75a2b'
//   }
