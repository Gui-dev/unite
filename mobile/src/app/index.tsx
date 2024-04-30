import { Alert, Image, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import colors from 'tailwindcss/colors'

import logo from '@/assets/logo.png'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { api } from '@/services/api'
import { useBadgeStore } from '@/store/badge-store'

const App = () => {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { data, save } = useBadgeStore()

  if (data) {
    return <Redirect href="/ticket" />
  }

  const handleAccessCredential = async () => {
    try {
      if (!code.trim()) {
        return setMessage('Informe o código do ingresso')
      }
      setIsLoading(true)
      const { data } = await api.get(`/attendees/${code}/badge`)
      save(data.badge)
      setIsLoading(false)
    } catch (error) {
      console.log('CREDENTIAL_ERROR: ', error)
      setIsLoading(false)
      Alert.alert('Ingresso', 'Ingresso não encontrado')
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
        <Button
          title="Acessar credencial"
          onPress={handleAccessCredential}
          isLoading={isLoading}
        />
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
