import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import bandPng from '@/assets/ticket/band.png'
import headerPng from '@/assets/ticket/header.png'
import qrcodePng from '@/assets/ticket/qrcode.png'
import colors from 'tailwindcss/colors'

interface ICredential {
  image?: string
  onChangeAvatar?: () => void
}

export const Credential = ({ image, onChangeAvatar }: ICredential) => {
  return (
    <View className="w-full items-center self-stretch">
      <Image source={bandPng} alt="Band Image" className="z-10 h-52 w-24" />
      <View className="mx-3 -mt-5 items-center self-stretch rounded-2xl border border-white/10 bg-black/10 pb-6">
        <ImageBackground
          source={headerPng}
          className="h-40 items-center self-stretch overflow-hidden border-b border-white/10 px-6 py-8"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-bold text-sm text-gray-50">Unite Summit</Text>
            <Text className="font-bold text-sm text-gray-50">#1782790902</Text>
          </View>
          <View className="h-40 w-40 rounded-full bg-black" />
        </ImageBackground>

        {image && (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image
              source={{ uri: image }}
              alt="Your image"
              className="-mt-24 h-36 w-36 rounded-full"
            />
          </TouchableOpacity>
        )}
        {!image && (
          <TouchableOpacity
            activeOpacity={0.9}
            className="-mt-24 h-36 w-36 items-center justify-center rounded-full bg-gray-400"
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className="mt-4 font-bold text-2xl text-gray-50">Gui Silva</Text>
        <Text className="mb-4 font-regular text-base text-gray-300">
          gui@email.com
        </Text>

        <Image source={qrcodePng} alt="QR Code Image" className="h-32 w-32" />
        <TouchableOpacity activeOpacity={0.9} className="mt-6">
          <Text className="font-bold text-sm text-orange-500">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
