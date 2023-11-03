import { StyleSheet }  from "react-native"
import { PADDING } from "../../utils/constantes"

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 5,
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    messageImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15
    },
    messageInfo: {
        flexDirection: 'column',
        flex: 1
    },
    date_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        marginRight: 5
    }
})

export default styles