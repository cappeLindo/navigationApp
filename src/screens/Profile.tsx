import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { theme } from "../Theme/Theme";
import { Feather } from "@expo/vector-icons";


export function ProfilePage() {
    return (

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
                    <Text style={styles.yearFomation}>2023 - 2025</Text>
                </View>
                <Text style={styles.formationText}>IFRO Campus Vilhena</Text>
                <Text style={styles.formationText}>Vihena-RO , Brazil</Text>
                <View style={styles.lineVerticalFotmation}></View>
                <View style={styles.cardTitle}>
                    <Text style={styles.formationTitle}>Courses</Text>
                    <Text style={styles.yearFomation}>2023 - 2025</Text>
                </View>
                <Text style={styles.formationText}>From Curso em Video and others</Text>
                <Text style={styles.courses}>• JavaScript</Text>
                <Text style={styles.courses}>• Python</Text>
                <Text style={styles.courses}>• React-native</Text>
                <Text style={styles.courses}>• Back-end</Text>
                <Text style={styles.courses}>• NodeJS</Text>
                <View style={styles.lineVerticalFotmation}></View>
                <View style={styles.cardTitle}>
                    <Text style={styles.formationTitle}>Graduation</Text>
                    <Text style={styles.yearFomation}>???? - ????</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    cardContainer: {
        marginTop: 40,
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
    lineVertical: {
        width: 2,
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
        width: 100,
        paddingTop: 6,
        borderRadius: 12,
        paddingBottom: 6,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.primary,
        color: theme.colors.tabBarInactiveColor,

    },
    formationText: {
        marginTop: 5,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_400Regular",
        color: theme.colors.tabBarInactiveColor,

    },
    lineVerticalFotmation: {
        height: 2,
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: theme.colors.lineColor,
    },
    courses: {
        marginTop: 6,
        paddingLeft: 12,
        color: theme.colors.justWhite,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_400Regular",
    }
})