import { navigate } from 'gatsby'

const DeparmentPage = props => {
  if (typeof window !== 'undefined') {
    navigate('/404')
  }
  return null
}

export default DeparmentPage
