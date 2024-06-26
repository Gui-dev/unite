import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MotiView } from 'moti'

import bandPng from '@/assets/ticket/band.png'
import headerPng from '@/assets/ticket/header.png'
import { QRCode } from '@/components/qrcode'
import colors from 'tailwindcss/colors'
import { IBadge } from '@/store/badge-store'

interface ICredential {
  data: IBadge
  onChangeAvatar?: () => void
  onShowQRCode: () => void
}

export const Credential = ({
  data,
  onChangeAvatar,
  onShowQRCode,
}: ICredential) => {
  const { height } = useWindowDimensions()

  return (
    <MotiView
      className="w-full items-center self-stretch"
      from={{
        opacity: 1,
        translateY: -height,
        rotateZ: '50deg',
        rotateX: '30deg',
        rotateY: '30deg',
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        rotateZ: '0deg',
        rotateX: '0deg',
        rotateY: '0deg',
      }}
      transition={{
        type: 'spring',
        damping: 20,
        rotateZ: { damping: 15, mass: 3 },
      }}
    >
      <Image source={bandPng} alt="Band Image" className="z-10 h-52 w-24" />
      <View className="mx-3 -mt-5 items-center self-stretch rounded-2xl border border-white/10 bg-black/10 pb-6">
        <ImageBackground
          source={headerPng}
          className="h-40 items-center self-stretch overflow-hidden border-b border-white/10 px-6 py-8"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-bold text-sm text-gray-50">
              {data.event_title}
            </Text>
            <Text className="font-bold text-sm text-gray-50">#{data.id}</Text>
          </View>
          <View className="h-40 w-40 rounded-full bg-black" />
        </ImageBackground>

        {data.image && (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image
              source={{ uri: data.image }}
              alt="Your image"
              className="-mt-24 h-36 w-36 rounded-full"
            />
          </TouchableOpacity>
        )}
        {!data.image && (
          <TouchableOpacity
            activeOpacity={0.9}
            className="-mt-24 h-36 w-36 items-center justify-center rounded-full bg-gray-400"
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className="mt-4 font-bold text-2xl text-gray-50">
          {data.name}
        </Text>
        <Text className="mb-4 font-regular text-base text-gray-300">
          {data.email}
        </Text>

        <QRCode size={128} value={data.check_in_url} />

        <TouchableOpacity
          activeOpacity={0.9}
          className="mt-6"
          onPress={onShowQRCode}
        >
          <Text className="font-bold text-sm text-orange-500">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  )
}
