import { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import colors from 'tailwindcss/colors'

interface IInput {
  children: ReactNode
}

interface IField extends TextInputProps {}

export const Input = ({ children }: IInput) => {
  return (
    <View className="h-14 w-full flex-row items-center gap-3 rounded-lg border border-gray-400 p-3">
      {children}
    </View>
  )
}

const Field = (props: IField) => {
  return (
    <TextInput
      placeholderTextColor={colors.gray[200]}
      {...props}
      className="flex-1 font-regular text-base text-white"
    />
  )
}

Input.Field = Field
