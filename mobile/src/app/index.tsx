import { Image, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useState } from 'react'
import colors from 'tailwindcss/colors'

import logo from '@/assets/logo.png'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

const App = () => {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  const handleAccessCredential = () => {
    if (!code.trim()) {
      return setMessage('Informe o código do ingresso')
    }
  }

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
          <Input.Field
            placeholder="Código do ingresso"
            value={code}
            onChangeText={setCode}
          />
        </Input>
        {message && <Text className="text-sm text-red-400">{message}</Text>}
        <Button title="Acessar credencial" onPress={handleAccessCredential} />
        <Link
          href="/register"
          className="mt-8 text-center font-bold text-base text-gray-100"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  )
}

export default App
