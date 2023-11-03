import { StyleSheet } from 'react-native'
import { COLORS, PADDING } from '../../utils/constantes'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
    },
    send: {
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 13,
        alignItems: 'center',
        color: 'white'
    }
})

export default styles