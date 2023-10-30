import { StyleSheet } from 'react-native'
import { PADDING } from '../../utils/constantes'

const styles = StyleSheet.create({
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 10,
        //marginTop: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 2
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subText: {
        marginTop: 6,
        fontSize: 12
    }
})

export default styles;