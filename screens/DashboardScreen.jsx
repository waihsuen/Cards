import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Switch, Subheading, Button } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'

import LogoSvg from '../assets/svg/logo'

export default function DashboardScreen() {
  const navigation = useNavigation()
  const [isSwitchTxtOn, setIsSwitchTxtOn] = React.useState(false)
  const [isSwitchImgOn, setIsSwitchImgOn] = React.useState(false)

  let [fontsLoaded] = useFonts({
    'Campton-Medium': require('../assets/fonts/Campton-Medium.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView>
        <ScreenHeading>Settings For Cards</ScreenHeading>
        <View style={[styles.body]}>
          <View style={[styles.content]}>
            <View>
              <LogoSvg />
            </View>
            <View style={[styles.switch]}>
              <Subheading>
                Show Text <Switch value={isSwitchTxtOn} onValueChange={() => setIsSwitchTxtOn(!isSwitchTxtOn)} />
              </Subheading>
            </View>
            <View style={[styles.switch]}>
              <Subheading>
                Show Images <Switch value={isSwitchImgOn} onValueChange={() => setIsSwitchImgOn(!isSwitchImgOn)} />
              </Subheading>
            </View>
            <View style={[styles.switch]}>
              <Button icon="cards" mode="contained" onPress={() => navigation.navigate('Cards')}>
                Generate Cards
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  switch: {
    textAlign: 'left',
    marginVertical: 16,
  },
})
