import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"orange",
        padding:20,
    },
    itemContainer:{
        marginBottom:15,
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:15,
        resizeMode:"contain",
    },
    title:{
        fontWeight:"bold",
        fontSize:22,
        color:"white"
    },
    brandContainer:{
        backgroundColor:"#000000"+5,
        position:"absolute",
        bottom:0,
        width:"100%",
        alignItems:"center",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    }
});
export default styles;