import React from 'react'; 
import {View, Text, Modal, Button, TouchableOpacity, StyleSheet} from 'react-native'; 
import {Ionicons, FontAwesome} from '@expo/vector-icons';


const PaymentScreen = ({visible, cancel})=>{
    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.mainView}>
                    <View style={{flex:.5, flexDirection: "row",justifyContent: "flex-end"}}>
                        <TouchableOpacity onPress={cancel}>
                            <Ionicons
                            name="ios-close-circle"
                            color="#4b617a"
                            size="40"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: .5, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 20}}>Select Payment Type</Text>
                    </View>
                    <View style={{flex:3, flexDirection: "column",alignItems: "center", justifyContent: "space-evenly"}}>
                        <TouchableOpacity>
                            <View style={styles.sectionView}>
                                <View style={{flex: 1}}>
                                    <FontAwesome
                                        name="cc-visa"
                                        size={30}
                                        color="#4b617a"
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Text>Visa Card</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.sectionView}>
                                <Text>Mobile Money</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.sectionView}>
                                <Text>Paypal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.sectionView}>
                                <Text>Express Pay</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "column", 
        flex: 1, 
        padding: 30,
        backgroundColor: "#fffff0", 
        marginTop: 30
    }, 
    sectionView: {
        height: 50, 
        width: 300, 
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-evenly", 
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5, 
        borderColor: "#990c58"
    }
})

export default PaymentScreen