import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { Loading } from '@/components/loading'
import '@/styles/global.css'

const Layout = () => {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!isFontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-green-500">
        <Loading />
      </View>
    )
  }

  return (
    <>
      <StatusBar style="light" translucent />
      <Slot />
    </>
  )
}

export default Layout
