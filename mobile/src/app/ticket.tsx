import { useState } from 'react'
import {
  Alert,
  Modal,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import * as ImagePicker from 'expo-image-picker'
import { MotiView } from 'moti'

import { Credential } from '@/components/credential'
import { Header } from '@/components/header'
import { Button } from '@/components/button'
import { QRCode } from '@/components/qrcode'
import { useBadgeStore } from '@/store/badge-store'
import { Redirect } from 'expo-router'

const Ticket = () => {
  const [showQRCode, setShowQRCode] = useState(false)
  const { data, remove, update_avatar } = useBadgeStore()

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      })
      if (result.assets) {
        update_avatar(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert('Foto', 'Não foi possível selecionar a imagem')
      console.log('IMAGE_ERROR: ', error)
    }
  }

  const handleShowQRCode = () => {
    setShowQRCode(!showQRCode)
  }

  const handleRemoveTicket = () => {
    remove()
  }

  const handleShare = async () => {
    try {
      if (data) {
        await Share.share({
          message: data.check_in_url,
        })
      }
    } catch (error) {
      Alert.alert('Compartilhar', 'Não foi possível compartilhar!!!')
      console.log(error)
    }
  }

  if (!data) {
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha credencial" />
      <ScrollView
        className="-z-10 -mt-28"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          data={data}
          onChangeAvatar={handleSelectImage}
          onShowQRCode={handleShowQRCode}
        />
        <MotiView
          from={{ translateY: 0 }}
          animate={{ translateY: 10 }}
          transition={{ type: 'timing', duration: 700, loop: true }}
        >
          <FontAwesome
            name="angle-double-down"
            color={colors.gray[300]}
            size={24}
            className="my-4 self-center"
          />
        </MotiView>
        <Text className="mt-4 font-bold text-2xl text-white">
          Compartilhar credencial
        </Text>
        <Text className="mb-6 mt-1 font-regular text-base text-white">
          Mostre ao mundo que você vai participar!!!
        </Text>

        <Button title="Compartilhar" onPress={handleShare} />

        <TouchableOpacity
          activeOpacity={0.9}
          className="mt-10"
          onPress={handleRemoveTicket}
        >
          <Text className="text-center font-bold text-base text-white">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        visible={showQRCode}
        statusBarTranslucent
        animationType="slide"
        className="relative"
      >
        <View className="flex-1 items-center justify-center bg-green-500">
          <TouchableOpacity
            activeOpacity={0.9}
            className="absolute right-10 top-20"
            onPress={handleShowQRCode}
          >
            <FontAwesome name="close" size={26} color={colors.orange[500]} />
          </TouchableOpacity>
          <QRCode value="TESTE" size={300} />
        </View>
      </Modal>
    </View>
  )
}

export default Ticket
