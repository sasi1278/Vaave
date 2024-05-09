import { StyleSheet } from "react-native";
import { screenWidth,screenHeight } from "../../utils/dimensions";
const styles = StyleSheet.create({
    card: {
      marginVertical: 5,
    },
    cardContent: {
      alignItems: 'flex-start',
      height:'auto',
      paddingVertical:5
    },
    image: {
      width: screenWidth*0.15,
      height: screenWidth*0.15,
      borderRadius: (screenWidth*0.15)/2,
      marginRight: 10,
    },
    contentContainer: {
      flexDirection:'row',
      alignItems:'center',
    },
    text:{
        alignSelf:'flex-start',
        marginRight: 10,
        marginTop:5,
        fontWeight:"bold",
        fontSize:13,
    },
    id:{
        marginRight: 10,
        marginTop:5,
        fontWeight:"bold",
        fontSize:15,  
    }
  });
export default styles  