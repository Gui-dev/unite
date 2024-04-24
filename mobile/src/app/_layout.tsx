import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import './../styles/global.css'

const Layout = () => {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!isFontsLoaded) {
    return
  }

  return (
    <>
      <StatusBar style="light" translucent />
      <Slot />
    </>
  )
}

export default Layout
