import { ActivityIndicator } from 'react-native'
import colors from 'tailwindcss/colors'

export const Loading = () => {
  return <ActivityIndicator size="large" color={colors.orange[500]} />
}
