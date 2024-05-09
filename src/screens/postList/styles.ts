import { StyleSheet } from "react-native";
import { screenHeight,screenWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal:15
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius:10
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 8,
    },
    sectionDescription: {
      fontSize: 18,
      fontWeight: '400',
      marginBottom: 16,
    },
});

export default styles