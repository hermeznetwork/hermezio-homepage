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
  section1img: {
    backgroundImage: 'url(./tokenomics-section1.png)',
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
  mainTitle: {
    marginTop: theme.spacer * 2,
    [theme.breakpoints.md]: {
      margin: 'auto'
    }
  },
  section1Paragraph: {
    marginTop: theme.spacer * 3
  },
  section2Title: {
    textAlign: 'center',
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 9,
    width: '100%'
  },
  section2MainText: {
    color: theme.palette.black,
    fontSize: theme.spacer * 3 - 1,
    fontWeight: theme.fontWeights.medium,
    lineHeight: `${theme.spacer * 5 - 1}px`,
    textAlign: 'center',
    marginBottom: theme.spacer * 17,
    padding: `0 ${theme.spacer * 20}px`
  },
  highlightedText: {
    color: theme.palette.black,
    fontSize: theme.spacer * 3 - 1,
    lineHeight: `${theme.spacer * 4 - 3}px`,
    fontWeight: theme.fontWeights.medium
  },
  highlightedParagraph: {
    marginBottom: theme.spacer * 3 + 3
  },
  section3Title: {
    textAlign: 'center',
    marginTop: theme.spacer * 4,
    marginBottom: theme.spacer * 9,
    width: '100%'
  },
  section3SubTitle: {
    marginTop: 0
  },
  section3Headline: {
    marginTop: theme.spacer * 4
  },
  section4: {
    textAlign: 'center'
  },
  addressList: {
    marginTop: theme.spacer * 8,
    marginBottom: theme.spacer * 10
  },
  addressRow: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `0.8px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacer * 2,
    paddingBottom: theme.spacer * 2.5
  },
  addressName: {
    color: theme.palette.black,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacer * 3 - 1
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
