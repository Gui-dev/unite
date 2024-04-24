import { ReactNode } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import colors from 'tailwindcss/colors'

interface IButton extends TouchableOpacityProps {
  title: ReactNode
  isLoading?: boolean
}

export const Button = ({ title, isLoading, ...rest }: IButton) => {
  return (
    <TouchableOpacity
      className="h-14 w-full items-center justify-center rounded-lg bg-orange-500"
      disabled={isLoading}
      activeOpacity={0.9}
      {...rest}
    >
      {isLoading && (
        <ActivityIndicator color={colors.green[500]} size="large" />
      )}
      {!isLoading && (
        <Text className="text-gree-500 font-bold text-base uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
