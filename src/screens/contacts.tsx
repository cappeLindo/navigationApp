import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { theme } from "../Theme/Theme";

export function ContactsPage() {
    const [emailSubject, setEmailSubject] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    const handleSendEmail = () => {
        if (!emailSubject.trim() || !emailMessage.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos!");
            return;
        }
        Alert.alert("Sucesso", "Você enviou e-mail!");
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.eamilContainerName}>
                <Text style={styles.email}>Send me an </Text>
                <Text style={styles.emailColor}>email!</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Assunto"
                    placeholderTextColor={theme.colors.tabBarInactiveColor}
                    value={emailSubject}
                    onChangeText={setEmailSubject}
                />

                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Escreva sua mensagem"
                    placeholderTextColor={theme.colors.tabBarInactiveColor}
                    value={emailMessage}
                    onChangeText={setEmailMessage}
                    multiline={true}
                />

                <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
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
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
    },
    container: {
        marginTop: 80,
    },
     eamilContainerName: {
        marginTop: "15%",
        flexDirection: "row",
        justifyContent: "center",
    },
    email: {
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarInactiveColor,
    },
    emailColor: {
        fontSize: theme.font.size.subTitle,
        fontFamily: "JetBrainsMono_700Bold",
        color: theme.colors.tabBarActiveColor,
    },
    input: {
        backgroundColor: "#2a2a2a",
        color: theme.colors.justWhite,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_700Bold",
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: theme.colors.tabBarActiveColor,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: theme.colors.primary,
        fontSize: theme.font.size.text,
        fontFamily: "JetBrainsMono_700Bold",
    },
    rights: {
        bottom: '4.5%',
        marginTop: 50,
        marginBottom: 80,
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
