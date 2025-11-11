import { StyleSheet, View, Text } from "react-native"
import { theme } from "../Theme/Theme"


type props = { 
    image?: unknown,
    title: string,
    text: string,
}

export function ProjectProp(props: props) { 
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cards}>
                <Text>{props.image}</Text>
                <View style={styles.alingText}>
                    <Text style={styles.titleCard}>{props.title}</Text>
                    <Text style={styles.textCard}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: { 
        padding: 16,
        width: '96%',
        marginTop: 30,
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: theme.colors.tabBarBackgroundColor,
    },
    cards: { 
        flexDirection: 'row',
    },
    titleCard: { 
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarInactiveColor,
    },
    alingText: { 
        flexShrink: 1,
        marginLeft: 20,

    },
    textCard: { 
        lineHeight: 22,
        fontFamily: "JetBrainsMono_400Regular",
        color: theme.colors.tabBarInactiveColor,
    }
})