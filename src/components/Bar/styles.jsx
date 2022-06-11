import { makeStyles,  }from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  appBar: {display:"flex", 
  
    justifyContent:"center",
    height: "90px",
    bottom: 0,
    position: "relative",
    width:"100%" ,
    background: "linear-gradient(#fff ,#98d0e1 5%);",
    alignItems:"center",
    flexDirection:'column',opacity:0.9,
  },
  Bar:{
    
    display:"flex", 
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  button :{
    display:"flex", 
    alignItems :"center",
    justifyContent:"space-around",
    backgroundColor:"#98d0e1",
    color: "#fff",
    padding: 5,
    margin: 5,
    fontSize:20,
    cursor:"pointer",
    textDecoration: 'none' ,
    color:"black",
    
  },
  img:{display:"flex",
    alignSelf:"",
    
    borderRadius:1,
   width:150,height:90,
},
}));