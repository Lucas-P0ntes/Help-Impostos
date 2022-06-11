import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {  display:'flex',
    flexDirection:'column',
    marginTop:90,
   
    
},

  homepage:{
    display:"flex",
    flexDirection:"row",
     justifyContent:"space-between",
     backgroundColor:"#fff",
     width:"100%",

  },
  titlehomepage:{
      fontSize:65,
      color:"#f98917" ,
  },
  imghome:{
    width: "50%",
    height: 550,

  },
  texthomepage:{
    fontSize:20,
    color:"#2943a1" ,
  },
  
 homebox:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     alignItems:"center",
marginLeft:25,
    
 },
 button:{
    justifyContent:"center",
    display:"flex",  
     margin: 10,
    fontSize:30,
    color: "#fff",
    alignItems:"center",
    backgroundColor:"#f98917",
    cursor:"pointer",
  
  borderRadius:15,
  width: 350,
  height: 80,
  textDecoration: 'none' ,

},
button2:{
    justifyContent:"center",
    display:"flex",  
     margin: 10,
    fontSize:20,
    color: "#fff",
    alignItems:"center",
    backgroundColor:"#f98917",
    cursor:"pointer",
  border: "1px solid #f98919",
  borderRadius:15,
  width: 200,
  height: 40,
  textDecoration: 'none' ,

},
box:{
    
     width:"100%",
    display:"flex",
    flexDirection:"row",
     justifyContent:"space-between",
    // backgroundColor:"",
   
    background: "linear-gradient(#fff , #ebf6f9 5%);"
  },
  sobre:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    padding:10,
    
    

  },
  img:{
      margin: 30,
    borderRadius:500,
  },
  box2:{
    
    width:"100%",
   display:"flex",
   flexDirection:"row",
    justifyContent:"space-between",
   background: "linear-gradient(#ebf6f9 ,#fff  5%);"
 },
 
}));