import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Slide = ()=>{
    return(
            <View style={styles.mainView}>
              <View style={{height: 180, width: 180, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.5 }}>
                <Image source={require('../assets/images/imgs1.jpg')} style={styles.img}/>
              </View>
             <View style={styles.imgView}>
                <Image source={require('../assets/images/imgs2.jpg')} style={styles.img}/>
              </View>
              <View style={styles.imgView}>
                <Image source={require('../assets/images/imgs3.jpg')} style={styles.img}/>
              </View>
              <View style={styles.imgView}>
                <Image source={require('../assets/images/imgs4.jpg')} style={styles.img}/>
              </View>
              <View style={styles.imgView}>
                <Image source={require('../assets/images/imgs5.jpg')} style={styles.img}/>
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
  mainView : {
    display: "flex", 
    flexDirection: "row", 
    marginVertical: 10,
    marginVertical: 20
  }, 
  imgView : {
    marginLeft: 15, 
    height: 180, 
    width: 180, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 1}, 
    shadowOpacity: 0.5 
  }, 
  img : {
    height: 180, 
    width: 180, 
    borderRadius:2,
  }
})

export default Slide