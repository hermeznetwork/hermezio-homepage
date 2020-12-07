import { createUseStyles } from 'react-jss'

const useRowStyles = createUseStyles(theme => ({
  row: {
    display: 'flex',
    [theme.breakpoints.sm]: {

    }
  }
}))

export default useRowStyles
