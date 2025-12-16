import { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

import { ListItem } from "@/components/ListItem"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { isRTL } from "@/i18n"
import { DemoTabScreenProps } from "@/navigators/navigationTypes"
import type { ThemedStyle } from "@/theme/types"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import { openLinkInBrowser } from "@/utils/openLinkInBrowser"

const chainReactLogo = require("@assets/images/demo/cr-logo.png")
const reactNativeLiveLogo = require("@assets/images/demo/rnl-logo.png")
const reactNativeNewsletterLogo = require("@assets/images/demo/rnn-logo.png")
const reactNativeRadioLogo = require("@assets/images/demo/rnr-logo.png")

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    const { themed } = useAppTheme()
    return (
      <Screen preset="scroll" contentContainerStyle={$styles.container} safeAreaEdges={["top"]}>
        <Text preset="heading" tx="demoCommunityScreen:title" style={themed($title)} />
      </Screen>
    )
  }

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

// @demo remove-file
