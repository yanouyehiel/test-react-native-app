import { StyleSheet } from 'react-native'
import { PADDING } from '../../utils/constantes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    userEmail: {
        marginBottom: 5
    }
})

export default styles