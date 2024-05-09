import React from "react";
import {View,Text,Image} from 'react-native'
import styles from "./styles";

interface RouteParams {
    name: string;
    mail: string;
  }
  

const Person=({ route }: { route: { params: RouteParams } })=>{
    const {name,mail}=route.params
    console.log('mail--------->',name,mail)
    return(
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://picsum.photos/700' }}
                />
                <Text style={styles.id}>{mail}</Text>
            </View>
            <Text style={styles.mail}>{name}</Text>
        </View>
    )
}

export default Person