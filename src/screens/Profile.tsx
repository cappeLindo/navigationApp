import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { theme } from "../Theme/Theme";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";


export function ProfilePage() {
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 40 }}
        >

            <View style={styles.mainContainer}>
                <View style={styles.aboutContainerName}>
                    <Text style={styles.aboutName}>About </Text>
                    <Text style={styles.aboutNameColor}>Me!</Text>
                </View>
                <View style={styles.cardContainer}>
                    <Image source={require('../images/caco.webp')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />
                    <View style={styles.textAboutContainer}>
                        <Text style={styles.aboutText}>
                            Hi, my name is Vitor Capelleto, I've been studying programming for about 2 years, focusing on front-end and back-end.
                        </Text>
                    </View>
                </View>
                <View style={styles.interestContainer}>
                    <Text style={styles.interestedText}>interested</Text>
                    <View style={styles.lineVertical}>

                    </View>
                    <Text style={styles.icons}>🎮Gaming</Text>
                    <Text style={styles.icons}>💤Sleep</Text>
                    <Text style={styles.icons}>🧑‍💻Code</Text>
                </View>
                <View style={styles.formationCard}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.formationTitle}>High School</Text>
                        <Text style={styles.yearFomation}>2023 - now</Text>
                    </View>
                    <Text style={styles.formationText}>IFRO Campus Vilhena</Text>
                    <Text style={styles.formationText}>Vihena-RO , Brazil</Text>
                    <View style={styles.lineVerticalFotmation}></View>
                    <View style={styles.cardTitle}>
                        <Text style={styles.formationTitle}>Courses</Text>
                        <Text style={styles.yearFomation}>2023 - now</Text>
                    </View>
                    <Text style={styles.formationText}>From Curso em Video and others</Text>
                    <Text style={styles.courses}>JavaScript</Text>
                    <Text style={styles.courses}>Python</Text>
                    <Text style={styles.courses}>React-native</Text>
                    <Text style={styles.courses}>Back-end</Text>
                    <Text style={styles.courses}>NodeJS</Text>
                    <View style={styles.lineVerticalFotmation}></View>
                    <View style={styles.cardTitle}>
                        <Text style={styles.formationTitle}>Graduation</Text>
                        <Text style={styles.yearFomation}>???? - ????</Text>
                    </View>
                    <Text style={styles.formationText}>I don't have an academic background yet.</Text>
                </View>
                <View style={styles.interestContainer}>
                    <Text style={styles.interestedText}>technologies</Text>
                    <View style={styles.lineVertical} />
                    <FontAwesome5 name="js" style={styles.iconsCode} size={30} color="#F7DF1E" />

                    <FontAwesome5 name="node-js" style={styles.iconsCode} size={30} color="#68A063" />

                    <Ionicons name="logo-react" style={styles.iconsCode} size={30} color="#61DAFB" />

                    <FontAwesome5 name="python" style={styles.iconsCode} size={30} color="#68A063" />
                </View>
                <View style={styles.rights}>
                    <Text style={styles.textRegister}>{'\u00A9'} 2025 - Diretos do site reservado</Text>
                    <View style={styles.containerRights}>
                        <Text style={styles.regOneColor}>made by </Text>
                        <Text style={styles.regTwoColor}>Vitor G. Capelleto</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: theme.colors.primary,
    },
    cardContainer: {
        marginTop: 30,
        alignSelf: 'center',
        flexDirection: 'row',

    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    textAboutContainer: {
        width: '70%',
        marginLeft: 12,
        paddingLeft: 12,
        borderRadius: 12,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.tabBarBackgroundColor,

    },
    aboutText: {
        fontFamily: "JetBrainsMono_400Regular",
        color: theme.colors.tabBarInactiveColor,
    },
    aboutContainerName: {
        marginTop: "15%",
        flexDirection: "row",
        justifyContent: "center",
    },
    aboutName: {
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarInactiveColor,
    },
    aboutNameColor: {
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarActiveColor,
    },
    interestContainer: {
        width: '97%',
        marginTop: 30,
        paddingTop: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 12,
        paddingBottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.tabBarBackgroundColor,
    },
    interestedText: {
        alignSelf: 'center',
        color: theme.colors.justWhite,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_400Regular",
    },
    icons: {
        padding: 8,
        borderRadius: 8,
        alignSelf: 'center',
        color: theme.colors.tabBarInactiveColor,
        fontSize: theme.font.size.text,
        backgroundColor: theme.colors.primary,
        fontFamily: "JetBrainsMono_400Regular",
    },
    iconsCode: {
        alignSelf: 'center',
        color: theme.colors.tabBarInactiveColor,
    },
    lineVertical: {
        width: 1,
        height: 30,
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: theme.colors.lineColor,
    },
    formationCard: {
        padding: 16,
        width: '97%',
        marginTop: 30,
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: theme.colors.tabBarBackgroundColor,
    },
    formationTitle: {
        color: theme.colors.justWhite,
        fontSize: theme.font.size.title,
        fontFamily: "JetBrainsMono_700Bold",
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    yearFomation: {
        width: 105,
        paddingTop: 6,
        borderRadius: 6,
        paddingBottom: 6,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.primary,
        color: theme.colors.tabBarInactiveColor,

    },
    formationText: {
        marginTop: 6,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_400Regular",
        color: theme.colors.tabBarInactiveColor,

    },
    lineVerticalFotmation: {
        height: 1,
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: theme.colors.lineColor,
    },
    courses: {
        width: 140,
        padding: 8,
        marginTop: 12,
        borderRadius: 8,
        color: theme.colors.justWhite,
        fontSize: theme.font.size.text,
        backgroundColor: theme.colors.primary,
        fontFamily: "JetBrainsMono_400Regular_Italic",
    },
    rights: {
        marginTop: 50,
        marginBottom: 80,
        alignSelf: 'center',
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
})