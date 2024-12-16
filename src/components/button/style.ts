import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: colors.blue[200],
        width: '85%',
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, 
    text: { 
        color: "#FFF",
        fontFamily: fontFamily.medium,
        fontSize: 16,
        textAlign: 'center'
    }
})