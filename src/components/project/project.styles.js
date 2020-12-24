import { createUseStyles } from 'react-jss'

const useProjectStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: '96px 72px'
    }
  },
  section1: {
    paddingTop: theme.spacing(23),
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    '& $content': {
      marginRight: 'auto',
      marginLeft: 0
    },
    '& $col23': {
      paddingLeft: theme.spacing(20)
    }
  },
  section2: {

  },
  section3: {
    backgroundColor: theme.palette.primary.light,
    '& $row': {
      justifyContent: 'space-between',
      paddingTop: theme.spacing(7)
    }
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
    width: '33%'
  },
  divider: {
    background: theme.palette.primary.main,
    height: '1px',
    width: '50%',
    marginLeft: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5)
  },
  full: {
    width: '100%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  },
  profile: {
    width: '214px'
  },
  image: {
    width: '100%'
  },
  name: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.black,
    fontSize: '23px',
    fontWeight: theme.fontWeights.medium,
    display: 'block'
  }
}))

export default useProjectStyles
