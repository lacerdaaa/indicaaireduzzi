import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: 500,
        width: '90%',
        borderRadius: 15,
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 15,
        paddingTop: 30,
    },
    logo: {
        marginBottom: 15,
    },
    title: {
        fontSize: 32,
        fontFamily: fontFamily.semiBold,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    },
    input: {

    },
    button: {

    },
    
})