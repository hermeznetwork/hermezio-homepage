import { createUseStyles } from 'react-jss'

const usePaymentsNetworkStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      flexDirection: 'row'
    }
  },
  col23: {
    [theme.breakpoints.sm]: {
      width: '67%'
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
  sectionWrapper: {
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.primary.light
    }
  },
  section: {
    padding: `${theme.spacer * 8}px ${theme.spacer * 2}px ${theme.spacer * 6}px ${theme.spacer * 2}px`,
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      padding: `${theme.spacer * 17}px ${theme.spacer * 2.5}px`,
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
    flexDirection: 'column-reverse',
    paddingTop: theme.spacer * 8,
    paddingBottom: theme.spacer * 9.5,
    textAlign: 'center',
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      paddingTop: theme.spacer * 19,
      paddingBottom: theme.spacer * 26,
      textAlign: 'left'
    }
  },
  section1img: {
    backgroundImage: 'url(./payment-network-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.sm]: {
      height: '460px'
    }
  },
  mainTitle: {
    marginTop: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginTop: 'auto'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.sm]: {
      justifyContent: 'left'
    }
  },
  list: {
    marginTop: theme.spacer * 2,
    paddingInline: theme.spacer * 2
  },
  listItem: {
    color: theme.palette.gray.main,
    fontSize: theme.spacer * 2,
    lineHeight: `${theme.spacer * 3.5}px`,
    paddingBottom: theme.spacer * 1
  },
  section3: {
    textAlign: 'center'
  },
  section3Title: {
    marginBottom: theme.spacer * 9
  },
  section4: {
    '& $divider': {
      [theme.breakpoints.sm]: {
        width: '50%'
      },
      marginLeft: 'auto',
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 5
    }
  },
  section4Title: {
    marginTop: 0,
    marginBottom: theme.spacer * 2
  },
  section5: {
    display: 'flex',
    '& $col2': {
      marginLeft: 0
    }
  },
  section5img: {
    backgroundImage: 'url(./payment-network-section5.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100%',
    [theme.breakpoints.sm]: {
      height: '360px'
    }
  },
  section5Text: {
    paddingTop: theme.spacer * 2,
    paddingBottom: theme.spacer * 4
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.sm]: {
      flexDirection: 'row',
      marginRight: theme.spacer * 7.5
    }
  },
  link: {
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.sm]: {
      marginBottom: 0
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.sm]: {
      marginTop: theme.spacer * 7,
      marginBottom: theme.spacer * 8
    }
  },
  inlineGraphicText: {
    [theme.breakpoints.sm]: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  },
  inlineGraphicImage: {
    [theme.breakpoints.sm]: {
      maxHeight: theme.spacer * 48
    }
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.sm]: {
      display: 'inline-block'
    }
  }
}))

export default usePaymentsNetworkStyles
