import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: 450,
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
        color: colors.gray[500],
        fontSize: 16
    },
    inputs: {
        gap: 20,
        marginTop: 20,
    },
    input: {
        backgroundColor: '#FFF',
        minWidth: '85%',
        minHeight: 50,
        borderRadius: 5,
        padding: 10,
    },
    forgot: {
        marginTop: 10,
        minWidth: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
    },
    checkboxText: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
    },
    forgotText: {
        fontSize: 14,
        color: colors.blue[200],
        fontFamily: fontFamily.medium,
    },
     
})