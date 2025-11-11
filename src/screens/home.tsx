import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../Theme/Theme";

export function HomePage() {
  return (
    <View style={styles.pageContainer}>
      <Image
        source={require("../images/caco.webp")}
        style={styles.imageStyle}
        resizeMode="contain"
      />

      <View style={styles.containerName}>
        <Text style={styles.name}>{"<Hello 👋, I'm "}</Text>
        <Text style={styles.nameColor}>{"Vitor Capelleto/>"}</Text>
      </View>

      <Text style={styles.carrierText}>
        {"<Front-End & Back-End Developer />"}
      </Text>

      <TouchableOpacity
        style={styles.cardOpacity}
        activeOpacity={0.85}
      >
        <Text style={styles.textPersonal}>
          I'm a dedicated developer who enjoys creating innovative and meaningful projects, constantly seeking new challenges and finding smart, creative solutions to real-world problems through technology.
        </Text>
      </TouchableOpacity>
      <View style={styles.rights}>
        <Text style={styles.textRegister}>{'\u00A9'} 2025 - Diretos do site reservado</Text>
        <View style={styles.containerRights}>
          <Text style={styles.regOneColor}>made by </Text>
          <Text style={styles.regTwoColor}>Vitor G. Capelleto</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  containerName: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    fontSize: theme.font.size.subTitle,
    fontFamily: "JetBrainsMono_700Bold",
    color: theme.colors.tabBarInactiveColor,
  },
  nameColor: {
    fontSize: theme.font.size.subTitle,
    fontFamily: "JetBrainsMono_700Bold",
    color: theme.colors.tabBarActiveColor,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderWidth: 2,
    marginTop: "28%",
    borderRadius: 100,
    alignSelf: "center",
    borderColor: theme.colors.tabBarBackgroundColor,
  },
  carrierText: {
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "JetBrainsMono_700Bold",
    fontSize: theme.font.size.ampliedText,
    color: theme.colors.tabBarInactiveColor,
  },
  cardOpacity: {
    padding: 25,
    width: "85%",
    elevation: 10,
    marginTop: 50,
    shadowRadius: 8,
    borderRadius: 20,
    shadowOpacity: 0.3,
    alignSelf: "center",
    shadowColor: "#ffffffff",
    transform: [{ scale: 1 }],
    shadowOffset: { width: 0, height: 8 },
    backgroundColor: theme.colors.tabBarBackgroundColor,
  },
  textPersonal: {
    lineHeight: 24,
    alignSelf: "center",
    textAlign: "center",
    color: theme.colors.justWhite,
    fontSize: theme.font.size.ampliedText,
    fontFamily: "JetBrainsMono_400Regular",
  },
  rights: {
    bottom: '12%',
    alignSelf: 'center',
    position: 'absolute',
  },
  textRegister: {
    color: theme.colors.justWhite,
    fontSize: theme.font.size.text,
    fontFamily: "JetBrainsMono_400Regular",
  },
  containerRights: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  regOneColor: {
    color: theme.colors.justWhite,
    fontSize: theme.font.size.text,
    fontFamily: "JetBrainsMono_400Regular",

  },
  regTwoColor: {
    fontSize: theme.font.size.text,
    color: theme.colors.tabBarActiveColor,
    fontFamily: "JetBrainsMono_400Regular",
  }
});
