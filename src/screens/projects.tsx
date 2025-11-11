import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import { theme } from "../Theme/Theme"
import { ProjectProp } from "../props/props.project";

export function ProjectsPage() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.colors.primary, }}>

            <View style={styles.mainContainer}>
                <Text style={styles.textProfile}>{'<projects />'}</Text>
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
                <ProjectProp
                    image={<Image source={require('../images/gr2.jpg')}
                        style={styles.imageContainer}
                        resizeMode="contain"
                    />}
                    title="Web Cars"
                    text="A digital dealership project created for learning and school projects."
                />
            </View>
            <View style={styles.margin}></View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: theme.colors.primary,
    },
    textProfile: {
        marginTop: "15%",
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "center",
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarInactiveColor,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    margin: { 
        marginBottom: 120
    }
})