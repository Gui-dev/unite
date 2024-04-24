import { Image, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

import logo from '@/assets/logo.png'
import './../styles/global.css'
import { Input } from '@/components/input'
import colors from 'tailwindcss/colors'
import { Button } from '@/components/button'

const Register = () => {
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
          <Input.Field placeholder="Nome completo" />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Seu E-mail" keyboardType="email-address" />
        </Input>

        <Button title="Realizar inscrição" />
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
