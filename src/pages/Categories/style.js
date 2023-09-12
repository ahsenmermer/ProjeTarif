import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"orange"
    },
    itemContainer:{
        alignSelf:"center",
        borderWidth:1,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        backgroundColor:"white",
        width:"95%",
        height:60,
        marginVertical:10,
        justifyContent:"center",
        padding:10,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        
    }
});
export default styles;