import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Button, Modal, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {CartContext} from '../App'; 
import Payment from '../screens/PaymentScreen';


const CheckoutScreen = ({navigation})=>{
  const {cart, removeItems} = useContext(CartContext)
  const [isAddMode, setIsAddMode] = useState(false)

  const closeButton = ()=>{
    setIsAddMode(false)
  }

  return(
   
    <View style={styles.mainView}>
      
       {cart.length > 0 ? 
          <ScrollView>{
            cart.map((products)=>{
              return(
              <View 
                    key={products.id} 
                    style={{display: 'flex', 
                            flexDirection: "column", 
                            justifyContent: "space-between", 
                            marginTop: 10,
                }}>
                <View style={{flexDirection: "row", width: 355,height: 100,backgroundColor: "rgba(236, 231, 231, 0.856)", shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity:0.2, borderRadius: 10,  padding: 10, }}>
                  <View style={{flex: 1.5}}>
                    <Image source={products.image} style={{height: 70, width: 70, borderRadius: 50}}/>
                  </View>
                  <View style={{flex: 3}}> 
                    <Text style={{marginTop: 10}} numberOfLines={3} ellipsizeMode={"tail"}>{products.description}</Text>
                  </View>
                  <View style={{flex: 1, display: 'flex', flexDirection: "column", justifyContent: "space-around", marginLeft: 10}}>
                    <View style={{}}>
                      <Text>{products.name}</Text>
                    </View>
                    <View style={{}}>
                      <Text>{`$${products.price}`}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={()=>{removeItems(products)}}>
                  <View style={{marginVertical: 10, width: 150, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 3, backgroundColor: "#990c58", shadowColor: '#000', shadowOffset: {width: 1, height: 1}, shadowOpacity:0.3,marginHorizontal: 100}}>
                    <Text style={{textAlign: "center", color: "#fff"}}>Remove from Cart</Text>
                  </View>
                </TouchableOpacity>
              </View>
              )
            })
          }
            </ScrollView>
        :
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20}}>Oops! please select a product</Text>
          <TouchableOpacity onPress={()=>{ navigation.navigate('Home')}}>
            <View style={{marginTop: 15}}>
              <Ionicons
                name="ios-home"
                size ={35}
                color="#4b617a"
              />
            </View>
            </TouchableOpacity>
        </View>
      }  
        <View>
          {cart.length <= 0  ? 
            <Button disabled title="cannot make payment" onPress={()=> console.log("do nothing")}/> 
            : 
            <TouchableOpacity onPress={()=>{setIsAddMode(true)}}>
              <View style={{backgroundColor: "red", height: 35, width: 355, justifyContent: "center", alignItems: 'center'}}>
                <Text style={{color: "#fff"}}>Make payment for {cart.length < 2 ? `an item` : `${cart.length} items`}</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
        {/* payment section  */}
        <Payment visible={isAddMode} cancel={()=>closeButton()}/>

    </View>
    
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1, 
    padding: 10, 
    backgroundColor: "#fffff0"
  }
})

export default CheckoutScreen