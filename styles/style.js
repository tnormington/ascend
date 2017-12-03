import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: 'cover',
        padding: 17,
        width: '100%',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 8,
        width: '100%'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 50,
        padding: 10,
        color: '#999',
        width: '100%',
        marginBottom: 17,
    },
    cta: {
        flexDirection: 'row',
        // flex: 1,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: '#FFEA51',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ctaYellow: {
        backgroundColor: '#FFEA51',
        color: '#4A4A4A'
    },
    ctaSmall: {
        // flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 4,
        padding: 8,
        borderWidth: 1,
        borderColor: '#92DFFF'
    },
    topBar: {
        marginTop: 10,
        height: 46,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    totalElevation: {
        flex: 1,
        flexDirection: 'row',
        // height: 40,
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#4A4A4A',
        padding: 10,
        paddingLeft: 4,
        // paddingRight: 8,
        // flex: 1,
    },
    icon: {
        resizeMode: 'center',
        width: 24,
        height: 24,
    },
    level: {
        textAlign: 'center'
    },
    header: {
        color: '#9B9B9B',
        fontSize: 13,
        marginBottom: 4
    }
});

export default style;
