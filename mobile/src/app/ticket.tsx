import { useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import * as ImagePicker from 'expo-image-picker'

import { Credential } from '@/components/credential'
import { Header } from '@/components/header'
import { Button } from '@/components/button'

const Ticket = () => {
  const [image, setImage] = useState('')

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      })
      if (result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert('Foto', 'Não foi possível selecionar a imagem')
      console.log('IMAGE_ERROR: ', error)
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha credencial" />
      <ScrollView
        className="-z-10 -mt-28"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential image={image} onChangeAvatar={handleSelectImage} />
        <FontAwesome
          name="angle-double-down"
          color={colors.gray[300]}
          size={24}
          className="my-4 self-center"
        />
        <Text className="mt-4 font-bold text-2xl text-white">
          Compartilhar credencial
        </Text>
        <Text className="mb-6 mt-1 font-regular text-base text-white">
          Mostre ao mundo que você vai participar!!!
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.9} className="mt-10">
          <Text className="text-center font-bold text-base text-white">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Ticket
