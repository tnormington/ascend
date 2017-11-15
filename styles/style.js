import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        padding: 17,
        width: '100%',
        alignItems: 'center'
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
        padding: 20,
        backgroundColor: '#FFEA51',
        borderRadius: 4,
        alignItems: 'center'
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
    }
});

export default style;
