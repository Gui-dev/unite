import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import colors from 'tailwindcss/colors'

import logo from '@/assets/logo.png'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageNameError, setMessageNameError] = useState('')
  const [messageEmailError, setMessageEmailError] = useState('')

  const handleRegister = () => {
    if (!name.trim()) {
      return setMessageNameError('O campo nome é obrigátorio')
    }
    if (!email.trim()) {
      return setMessageEmailError('O campo e-mail é obrigátorio')
    }

    router.push('/ticket')
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
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
        </Input>
        {messageNameError && (
          <Text className="text-sm text-red-400">{messageNameError}</Text>
        )}
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="Seu E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </Input>
        {messageEmailError && (
          <Text className="text-sm text-red-400">{messageEmailError}</Text>
        )}

        <Button title="Realizar inscrição" onPress={handleRegister} />
        <Link
          href="/"
          className="mt-8 text-center font-bold text-base text-gray-100"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}

export default Register
