import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {  display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifycontent:"center",
    marginTop:90,
},
img:{
    display: "flex",
    height: 300,
    borderRadius:30,
    width:400 ,
    margin: 30,
    paddingTop:60,
    padding:20,

},
 text:{
  height: "",
  width:"70%",
  display:'flex',
  flexDirection:'column',
  alignItems:"center",
  justifycontent:"center",
  fontfamily: 'Times, Times New Roman, serif',


 },
 box:{
   display:"flex",
   flexDirection:"row",
    
    justifyContent:"space-between",
    backgroundColor:"#efefef",
    width:"100%",

 },
 title:{
  display:'flex',
  flexDirection:'column',
  alignItems:"center",
  margin: 50 ,
  fontSize:20,
  width:"30%",
  color:"#2b45a5",
 },
 title2:{
  
  color:"#2b45a5",
 },
 title3:{
  
  color:"#f98917",
 }
 
}));