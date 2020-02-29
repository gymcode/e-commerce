import React, {useState} from 'react';
import {
  View, 
  Text, 
  Button, 
  ScrollView, 
  Image,
  TouchableOpacity
} from 'react-native'; 
import {Ionicons, Entypo} from '@expo/vector-icons'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'


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

const HomeScreen = (props)=>{
  const [product, setProduct] = useState(productItems);
  const [cart, setCart] = useState([]);
  

  const addItemstoCart = (products)=>{
    const {id, name, price} = products

    const newCart = {
        id, 
        name, 
        price
    }
    products.isTrue = true;

    setCart([newCart, ...cart]);
  }

  const removeItemsFromCart = (items)=>{
     const reNewCart = items.filter((item)=> item.id !== id);
      product.isTrue = false

      setCart([reNewCart, ...product])
  }

  return(
    <ScrollView>
    <View style={{flex: 1,backgroundColor: "rgba(236, 231, 231, 0.856)"}} > 
        {/* header section  */}
        <View style={{flexDirection: "row", padding:20,justifyContent: "space-between"}}>
          <TouchableOpacity>
            <View >
              <Entypo
                name="menu"
                size={25}
                color={"#4b617a"}
              />
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: 26, color: "#4b617a", }}>Stock Product </Text>
          <View style={{flexDirection: "row"}}>
          <TouchableOpacity>
            <View style={{ height: 30, width: 30, justifyContent: "center", alignItems: "center", borderRadius: 50}}>
              <Ionicons
                name="md-cart"
                size ={25}
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
            <View style={{display: "flex", flexDirection: "row", marginVertical: 10,marginVertical: 20}}>
              <View style={{height: 180, width: 180,  shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.8 ,borderRadius: 10,backgroundColor: "red"}}/>
              <View style={{height: 180, width: 180, marginLeft: 15,  shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.8 ,borderRadius: 10,backgroundColor: "blue"}}/>
              <View style={{height: 180, width: 180, marginLeft: 15,  shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.8 ,borderRadius: 10,backgroundColor: "green"}}/>
              <View style={{height: 180, width: 180, marginLeft: 15,  shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.8 ,borderRadius: 10,backgroundColor: "yellow"}}/>
              <View style={{height: 180, width: 180, marginLeft: 15,  shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.8 ,borderRadius: 10,backgroundColor: "orange"}}/>
            </View>
        </ScrollView>
        {/* third section */}
        <View style={{padding: 20}}>
        <View style={{height: 140, marginVertical: -50}}>
              <View style={{ flex:1, padding: 16, backgroundColor: "#f0f0f0", shadowColor: '#000', shadowOffset: {width: 0, height: 1},shadowOpacity:0.1 ,marginTop:50, borderRadius: 10, flexDirection: "row", }}>
                        <View style={{flex: 1}}>
                          <TouchableOpacity>
                            <View style={{borderRadius: 40, borderWidth: 1, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, borderColor: 'red', height:65, width: 65, justifyContent: "center", alignItems: "center"}}>
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
                            <View style={{borderRadius: 40, borderWidth: 1, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, borderColor: 'orange', height:65, width: 65, justifyContent: "center", alignItems: "center"}}>
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
                            <View style={{borderRadius: 40, borderWidth: 1, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, borderColor: 'green', height:65, width: 65, justifyContent: "center", alignItems: "center"}}>
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
                            <View style={{borderRadius: 40, borderWidth: 1, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, borderColor: 'blue', height:65, width: 65, justifyContent: "center", alignItems: "center"}}>
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
        <ScrollView>
        <View style={{flexDirection: "row", flexWrap: "wrap",marginTop: 20 }}>
            {
              product.map((products)=>{
                return(
                  <View key={products.id} style={{display: 'flex', shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity:0.1, borderRadius: 10 ,backgroundColor: "#f0f0f0", marginBottom: 10, marginLeft: 10,height:160, width: 150}}>
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
                            <Button title="Remove" onPress={()=>{removeItemsFromCart(products)}}/>
                          </View>
                          : 
                          <View>
                            <Button title="Add" onPress={ ()=>{addItemstoCart(products)}}/>
                          </View> 
                        }
                      </View>
                    </View>
                  </View>
                )
              })
            }
        </View>
        </ScrollView>
        </View>
    </View>
    </ScrollView>
  )
}

export default HomeScreen;