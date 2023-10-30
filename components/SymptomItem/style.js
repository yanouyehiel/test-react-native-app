import { StyleSheet } from 'react-native'
import { PADDING } from '../../utils/constantes'

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    libelle: {
        textAlign: 'center'
    }
})

export default styles