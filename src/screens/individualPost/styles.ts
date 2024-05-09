import { StyleSheet } from "react-native";
import { screenWidth,screenHeight } from "../../utils/dimensions";
const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
    },
    contentContainer: {
        flexDirection:'row',
        alignItems:'center',
    },
    image: {
        width: screenWidth*0.15,
        height: screenWidth*0.15,
        borderRadius: (screenWidth*0.15)/2,
        marginHorizontal: 10,
        marginTop:10
    },
    text:{
        alignSelf:'flex-start',
        marginHorizontal: 10,
        marginVertical:10,
        fontWeight:"bold",
        fontSize:17,
    },
    id:{
        marginRight: 10,
        marginVertical:10,
        fontWeight:"bold",
        fontSize:20,  
    },
    shadow: {
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 1,
    },
  });
export default styles  