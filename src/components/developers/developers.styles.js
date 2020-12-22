import { createUseStyles } from 'react-jss'

const useDevelopersStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: '96px 72px'
    }
  },

  section3: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    '& p': {
      color: theme.palette.gray.light
    }
  },

  discordHiglight: {
    backgroundImage: 'url(./discord-link-background.svg)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover'
  }
}))

export default useDevelopersStyles
