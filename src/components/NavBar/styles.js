import { makeStyles,  }from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    width:"100%" ,
    display:"flex", 
    background:"#FFF",
    color:"#008000 ",
    padding: 10,
    top: 0,
    
    
    justifyContent:"space-between",
     flexDirection: "row",
   
    
  },
  Bar:{
    
    display:"flex", 
    marginRight:30,

    flexDirection:"row",
    justifyContent:"flex-end",
  },
  button :{
    display:"flex", 
    alignItems :"center",
    justifyContent:"space-around",
    backgroundColor:"#fff",
    color: "#2943a1",
    margin: 25,
    fontSize:20,
    cursor:"pointer",
    textDecoration: 'none' ,
    
  },
  img:{display:"flex",
    alignSelf:"",
    
    borderRadius:1,
   width:145,height:85,
},
}));