import { Text, View } from 'react-native'

interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  return (
    <View className="h-20 w-full flex-row items-end border-b border-white/10 bg-black/20 px-8 pb-2">
      <Text className="flex-1 text-center font-medium text-lg text-white">
        {title}
      </Text>
    </View>
  )
}
