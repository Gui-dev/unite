import { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import colors from 'tailwindcss/colors'

import logo from '@/assets/logo.png'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { api } from '@/services/api'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageNameError, setMessageNameError] = useState('')
  const [messageEmailError, setMessageEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async () => {
    try {
      if (!name.trim()) {
        return setMessageNameError('O campo nome é obrigátorio')
      }
      if (!email.trim()) {
        return setMessageEmailError('O campo e-mail é obrigátorio')
      }
      setIsLoading(true)

      const { data } = await api.post(
        'events/clv21xmnd000014ijykhwdyvp/attendees',
        {
          name,
          email,
        },
      )
      if (data.attendee_id) {
        Alert.alert('Inscrição', 'Inscrição realizada com sucesso', [
          {
            text: 'OK',
            onPress: () => router.push('/ticket'),
          },
        ])
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          String(error.response?.data.message).includes('already registered')
        ) {
          Alert.alert('Inscrição', 'Este e-mail já está cadastrado')
        }

        if (
          String(error.response?.data.message).includes(
            'event has been reached',
          )
        ) {
          Alert.alert(
            'Inscrição',
            'Infelizmente não temos mais vagas disponiveis',
          )
        }
      } else {
        Alert.alert('Inscrição', 'não foi possível fazer a inscrição')
        console.log('REGISTER_ERROR: ', error)
      }
    } finally {
      setIsLoading(false)
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

        <Button
          title="Realizar inscrição"
          onPress={handleRegister}
          isLoading={isLoading}
        />
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
