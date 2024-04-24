import { Image, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import logo from '@/assets/logo.png'
import './../styles/global.css'
import { Input } from '@/components/input'
import colors from 'tailwindcss/colors'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-green-500 p-8">
      <Image
        source={logo}
        alt="Unite Logo"
        className="h-16"
        resizeMode="contain"
      />
      <View className="mt-12 w-full gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>
      </View>
    </View>
  )
}

export default App
