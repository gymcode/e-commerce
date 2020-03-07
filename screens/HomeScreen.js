import React, {useState, useContext} from 'react';
import {
  View, 
  Text, 
  Button, 
  ScrollView, 
  Image,
  TouchableOpacity, 
  StyleSheet
} from 'react-native'; 
import {Ionicons, Entypo, FontAwesome} from '@expo/vector-icons';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import {CartContext} from '../App'

//sections
import Slide from '../sections/slideSection'


// json file
const productItems = [
  {"id":0,
  "name":"iPhone 6S",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":799,
  "isTrue": false},
  {"id":1,
  "name":"iPhone 5S",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":349,
  "isTrue": false},
  {"id":2,
  "name":"Macbook",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":149,
  "isTrue": false},
  {"id":3, 
  "name":"Macbook Air",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":999,
  "isTrue": false},
  {"id":4,
  "name":"Macbook Air 2013",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":599,
  "isTrue": false},
  {"id":5,
  "name":"Macbook Air 2012",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":499,
  "isTrue": false}, 
  {"id":6,
  "name":"iPhone 6S",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":799,
  "isTrue": false},
  {"id":7,
  "name":"iPhone 5S",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":349,
  "isTrue": false},
  {"id":8,
  "name":"Macbook",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":149,
  "isTrue": false},
  {"id":9, 
  "name":"Macbook Air",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":999,
  "isTrue": false},
  {"id":10,
  "name":"Macbook Air 2013",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":599,
  "isTrue": false},
  {"id":11,
  "name":"Macbook Air 2012",
  "description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
  "image": require('../assets/images/hello.jpg'),
  "price":499,
  "isTrue": false}

]

const HomeScreen = ({navigation})=>{
  const [product, setProduct] = useState(productItems);
  const {cart, addToProductToCart, removeItems} = useContext(CartContext);
  
  return(
    <ScrollView>
    <View style={styles.mainView} > 
        {/* header section  */}
        <View style={styles.mainHeader}>
          <TouchableOpacity>
            <View >
              <Entypo
                name="menu"
                size={22}
                color={"#4b617a"}
              />
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: 26, color: "#4b617a", }}>Stock Product </Text>
          <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={()=>{ navigation.navigate('Checkout')}}>
            <View style={{ height: 30, width: 30, justifyContent: "center", alignItems: "center", borderRadius: 50}}>
              <FontAwesome
                name="opencart"
                size ={22}
                color="#4b617a"
              />
            </View>
          </TouchableOpacity>
            <View>
              <Text style={{ color: "#4b617a" }}>{ !cart.length ? 
                "empty"
                : cart.length }
              </Text> 
            </View>
            
          </View>
        </View>
        {/* display section */}
        <ScrollView horizontal={true}>
            <Slide/>
        </ScrollView>
        {/* third section */}
        <View style={{padding: 20}}>
        <View style={{height: 140, marginVertical: -50}}>
              <View style={styles.thirdSec}>
                        <View style={{flex: 1}}>
                          <TouchableOpacity>
                            <View style={styles.thirdSecIcon1}>
                            <Icons
                                name="truck-delivery"
                                size={30}
                                color="red"
                                />
                            </View>
                          </TouchableOpacity>
                        </View>  
                        <View style={{flex: 1}}>
                         <TouchableOpacity>
                            <View style={styles.thirdSecIcon2}>
                            <Icons
                                name="timer-sand"
                                size={30}
                                color="orange"
                                />
                            </View>
                          </TouchableOpacity>
                        </View>  
                        <View style={{flex: 1}}>
                          <TouchableOpacity>
                            <View style={styles.thirdSecIcon3}>
                            <Ionicons
                                name="ios-airplane"
                                size={30}
                                color="green"
                                />
                            </View>
                          </TouchableOpacity>
                        </View>  
                          <View style={{flex: 1}}>
                          <TouchableOpacity>
                            <View style={styles.thirdSecIcon4}>
                                <Ionicons
                                name="ios-call"
                                size={30}
                                color="blue"
                                />
                            </View>
                          </TouchableOpacity>
                        </View>            
                </View>
         </View>
        {/* text section  */}
        <View style={{marginTop: 70}}>
          <Text style={{textAlign: "center", fontSize: 20, color: "#4b617a"}}>Shopping List</Text>
        </View>
        {/* product section  */}
        <View style={{flexDirection: "row", flexWrap: "wrap",marginTop: 20 }}>
            {
              product.map((products)=>{
                return(
                  <View key={products.id} style={styles.proHeader}>
                    <View style={{flexDirection: "column", flex: 1}}>
                      <View style={{flex: 3}}>
                        <Image source={products.image} style={{height: 96, borderRadius: 10,width: 150}}/>
                      </View>
                      <View style={{flex: .5}}>
                        <Text style={{textAlign: "center"}}>{products.name}</Text>
                      </View>
                      <View style={{flex: .5}}>
                        <Text style={{textAlign: "center"}}>{`$${products.price}`}</Text>
                      </View>
                      {/* button */}
                      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly"}}>
                        {
                          products.isTrue ? 
                          <View>
                            <Button title="Remove" onPress={()=>{removeItems(products)}}/>
                          </View>
                          : 
                          <View>
                            <Button title="Add" onPress={()=>{addToProductToCart(products)}}/>
                          </View> 
                        }
                      </View>
                    </View>
                  </View>
                )
              })
            }
        </View>
        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: "#fffff0"
    }, 
    mainHeader: {
      flexDirection: "row", 
      padding:20,
      justifyContent: "space-between"
    }, 
    thirdSec: {
      flex:1, 
      padding: 16, 
      backgroundColor: "rgba(236, 231, 231, 0.856)", 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1},
      shadowOpacity:0.1,
      marginTop:50, 
      borderRadius: 10, 
      flexDirection: "row", 
    }, 
    thirdSecIcon1: {
      borderRadius: 40, 
      borderWidth: 1, 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1}, 
      borderColor: 'red', 
      height:65, width: 65, 
      justifyContent: "center", 
      alignItems: "center"
    }, 
    thirdSecIcon2: {
      borderRadius: 40, 
      borderWidth: 1, 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1}, 
      borderColor: 'orange', 
      height:65, width: 65, 
      justifyContent: "center", 
      alignItems: "center"
    }, 
    thirdSecIcon3: {
      borderRadius: 40, 
      borderWidth: 1, 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1}, 
      borderColor: 'green', 
      height:65, 
      width: 65, 
      justifyContent: "center", 
      alignItems: "center"
    },
    thirdSecIcon4: {
      borderRadius: 40, 
      borderWidth: 1, 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1}, 
      borderColor: 'blue', 
      height:65, 
      width: 65, 
      justifyContent: "center", 
      alignItems: "center"
    }, 
    proHeader: {
      display: 'flex', 
      shadowColor: '#000', 
      shadowOffset: {width: 0, height: 1}, 
      shadowOpacity:0.1, 
      borderRadius: 10 ,
      backgroundColor: "rgba(236, 231, 231, 0.856)", 
      marginBottom: 10, 
      marginLeft: 10,
      height:160, 
      width: 150
    }
})

export default HomeScreen;