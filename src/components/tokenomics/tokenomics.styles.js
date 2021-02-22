import { createUseStyles } from 'react-jss'

const useTokenomicsStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  col23: {
    [theme.breakpoints.md]: {
      width: '67%'
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
    flexDirection: 'column-reverse',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      paddingTop: theme.spacer * 20,
      textAlign: 'left'
    }
  },
  section1Row: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.md]: {
      flexDirection: 'row'
    }
  },
  section1img: {
    backgroundImage: 'url(../tokenomics-section1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 'auto',
    width: '100%',
    height: '100vw',
    marginTop: theme.spacer * 2,
    [theme.breakpoints.md]: {
      height: '385px',
      marginTop: 0
    }
  },
  mainTitle: {
    margin: 'auto'
  },
  section1Paragraph: {
    marginTop: theme.spacer,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 3
    }
  },
  section2Title: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: theme.spacer * 3,
    width: '100%',
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 9
    }
  },
  boxWrapper: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    paddingTop: theme.spacer * 4,
    paddingBottom: theme.spacer * 5,
    borderRadius: theme.spacer * 2 + 1,
    '&:first-child': {
      marginBottom: theme.spacer * 2
    },
    [theme.breakpoints.md]: {
      marginBottom: 0,
      paddingTop: theme.spacer * 5,
      paddingBottom: theme.spacer * 7,
      borderRadius: theme.spacer * 2.5,
      '&:first-child': {
        marginRight: theme.spacer * 4.5
      }
    }
  },
  boxTitle: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    display: 'block',
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    marginBottom: theme.spacer,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3 - 1,
      lineHeight: `${theme.spacer * 5 - 1}px`,
      marginBottom: theme.spacer * 3
    }
  },
  boxText: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.spacer * 3.5,
    lineHeight: `${theme.spacer * 4.5}px`,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 4 + 2,
      lineHeight: `${theme.spacer * 5 + 2}px`
    }
  },
  section2MainText: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    textAlign: 'center',
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 8,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3 - 1,
      lineHeight: `${theme.spacer * 5 - 1}px`,
      marginTop: theme.spacer * 7,
      marginBottom: theme.spacer * 17,
      padding: `0 ${theme.spacer * 20}px`
    }
  },
  section2SubTitle: {
    marginTop: 0
  },
  section2SubText: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 4,
    [theme.breakpoints.md]: {
      marginTop: 0,
      marginBottom: 0
    }
  },
  highlightedText: {
    color: theme.palette.black,
    fontSize: theme.spacer * 3 - 1,
    lineHeight: `${theme.spacer * 4 - 3}px`,
    fontWeight: theme.fontWeights.medium
  },
  highlightedParagraph: {
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 3}px`,
    marginTop: theme.spacer * 2,
    [theme.breakpoints.md]: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      marginBottom: theme.spacer * 3 + 3,
      marginTop: 0
    }
  },
  section3Title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 0,
    marginBottom: theme.spacer * 4,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 4,
      marginBottom: theme.spacer * 9
    }
  },
  section3SubTitle: {
    marginTop: 0,
    marginBottom: theme.spacer * 2,
    [theme.breakpoints.md]: {
      marginBottom: 0
    }
  },
  section3Headline: {
    marginTop: theme.spacer * 4
  },
  section3img: {
    marginBottom: theme.spacer * 5,
    [theme.breakpoints.md]: {
      marginBottom: 0
    }
  },
  section3img1: {
    marginBottom: theme.spacer * 3,
    [theme.breakpoints.md]: {
      marginBottom: 0
    }
  },
  section4: {
    textAlign: 'center'
  },
  section4Title: {
    textAlign: 'left',
    [theme.breakpoints.md]: {
      textAlign: 'center'
    }
  },
  addressList: {
    marginTop: theme.spacer * 2,
    marginBottom: theme.spacer * 5,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 8,
      marginBottom: theme.spacer * 10
    }
  },
  addressRow: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: theme.spacer * 1.5,
    paddingBottom: theme.spacer * 1.5,
    textAlign: 'left',
    borderBottom: `0.8px solid ${theme.palette.primary.main}`,
    '&:last-child': {
      borderBottom: '0 none'
    },
    [theme.breakpoints.md]: {
      flexDirection: 'row',
      paddingTop: theme.spacer * 2,
      paddingBottom: theme.spacer * 2.5
    }
  },
  addressName: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 2.5,
    lineHeight: `${theme.spacer * 4}px`,
    marginBottom: theme.spacer,
    [theme.breakpoints.md]: {
      fontSize: theme.spacer * 3 - 1,
      lineHeight: 'normal',
      marginBottom: 0
    }
  },
  address: {
    textAlign: 'left',
    [theme.breakpoints.md]: {
      minWidth: theme.spacer * 52.5
    }
  },
  walletsSectionText: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 3 - 1,
    lineHeight: `${theme.spacer * 5 - 1}px`
  },
  inlineGraphicImage: {
    [theme.breakpoints.md]: {
      maxHeight: theme.spacer * 48
    }
  },
  email: {
    color: theme.palette.orange.main,
    paddingLeft: theme.spacer * 1
  },
  onlyDesktop: {
    display: 'none',
    [theme.breakpoints.md]: {
      display: 'block'
    }
  },
  onlyMobile: {
    display: 'block',
    [theme.breakpoints.md]: {
      display: 'none'
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: theme.palette.primary.main,
    marginTop: 0,
    marginBottom: theme.spacer * 5,
    [theme.breakpoints.md]: {
      marginTop: theme.spacer * 9,
      marginBottom: theme.spacer * 16
    }
  }
}))

export default useTokenomicsStyles
