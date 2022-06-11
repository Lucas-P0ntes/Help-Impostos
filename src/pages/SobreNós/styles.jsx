import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {  display:'flex',
    flexDirection:'column',
    alignItems:"center",
    marginTop:90,
  
},

     
 boxfromimg:{
     display:'flex',
     flexDirection:'column',
   width:"100%",
   height:400,  
   background: "url(https://media.istockphoto.com/photos/wooden-abstract-background-texture-of-blue-pastel-color-with-natural-picture-id1031307294?k=20&m=1031307294&s=170667a&w=0&h=A5CX4ZqCeJiPKSOzUN77hZ7u6d0gAUUOmsUfzPVjC7A=)",
   backgroundRepeat:"no-repeat",
   backgroundSize:"cover",
   alignItems:"center",
   justifyContent:"center",

 },


boxall:{
    display:"flex",
    flexDirection:'column',
    backgroundColor:"#efefef",
    width:"60%",
    borderRadius:15,
   
    alignItems:"center",
    justifyContent:"center",

},
boxtitle:{
    display:"flex",
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
    width:"43%",
},

title:{
    
    fontSize:60,
    color:"#f98917",
},
subtitle:{
    
    fontSize:30,
    color:"#2943a1",
},
subtitle2:{
    
    fontSize:30,
    color:"#f98917",
},
text:{
    
    fontSize:30,
    color:"#2943a1",
}



 
}));