import { StyleSheet } from "react-native";
import { screenWidth,screenHeight } from "../../utils/dimensions";
const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cardContent: {
      alignItems: 'flex-start',
      width:screenWidth*0.9,
      height:'auto',
      padding:10
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
        marginVertical:10,
        fontWeight:"bold",
        fontSize:17,
    },
    id:{
        marginRight: 10,
        marginVertical:10,
        fontWeight:"bold",
        fontSize:20,  
    }
  });
export default styles  