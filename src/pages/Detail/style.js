import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgray",
        padding:10,

    },
    innerContainer:{
        width:"100%",
        height:2,
        backgroundColor:"gray"
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:15,
        resizeMode:"contain",
    },
    title:{
        fontSize:26,
        fontWeight:"bold"
    },
    brand:{
        fontSize:20,
        fontWeight:"600",
    },
    desc:{
        fontSize:16,

    }
});
export default styles;