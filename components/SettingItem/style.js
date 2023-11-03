import { StyleSheet } from 'react-native'
import { PADDING } from '../../utils/constantes'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    }
})

export default styles