import { createUseStyles } from 'react-jss'

const useProjectStyles = createUseStyles(theme => ({
  section: {
    padding: theme.spacing(2),
    [theme.breakpoints.sm]: {
      padding: '96px 72px'
    }
  }
}))

export default useProjectStyles
