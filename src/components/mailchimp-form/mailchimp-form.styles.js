import { createUseStyles } from 'react-jss'

const useMailchimpFormStyles = createUseStyles(theme => ({
  formWrapper: {
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(./discord-link-background-mobile.svg)',
    borderRadius: theme.spacer * 3,
    backgroundSize: 'cover',
    padding: `${theme.spacer * 3}px ${theme.spacer * 1.75}px ${theme.spacer * 2}px`,
    [theme.breakpoints.md]: {
      backgroundImage: 'url(./discord-link-background.svg)',
      padding: `${theme.spacer * 4.5}px ${theme.spacer * 7}px ${theme.spacer * 6}px`
    }
  },
  title: {
    marginBottom: theme.spacer * 3,
    textAlign: 'left'
  }
}))

export default useMailchimpFormStyles
