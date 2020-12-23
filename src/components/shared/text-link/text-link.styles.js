import { createUseStyles } from 'react-jss'

const useTextLinkStyles = createUseStyles(theme => ({
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
    marginBottom: '48px'
  },
  boxLinkText: {
    width: '140px',
    paddingRight: '16px'
  }
}))

export default useTextLinkStyles
