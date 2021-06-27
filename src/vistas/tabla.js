import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'; 
import MaterialDatatable from 'material-datatable';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function Tabla(){
 const [usuario, setUsuario] = useState("");
 const [password, setPassword] = useState("");

 useEffect(() => {

  Listar();
},[]);


//const classes = useStyles();

const columns = [

 {
     name: "Sel",
     options: {
       headerNoWrap: true,
       customBodyRender: (item) => {
         return (
           <Button
             variant="contained"
             className="btn-block"
             onClick={() =>{
                 setUsuario(item.usuario)
                 setPassword(item.password)
                 setAccion("Modificar")

             }}
           >
             Seleccionar
           </Button>
         );
       },
     },
   },
 {
     name: 'Usuario',
     field: 'usuario',
 },
 {
     name: 'Password',
     field: 'password',
 },

];


const options = {
 selectableRows:false
};

const Listar = () =>{

 axios
     .get(
         `http://192.99.144.232:8080/api/usuario`
     )
     .then(
         (response) => {
             setData(response.data)
      
         },
         (error) => {
      
         }



     );
}
////////





  axios
    .put(
     "http://192.99.144.232:8080/api/usuario/${id}",
     {
         usuario:"nuevapersona_01",
         password:"nueva_contra01"

     }

  ).then(
      (response)=>{
          if(response.status==200){
              alert("modificacion correcta")
          }
      });

  axios
    .post(
     "http://192.99.144.232:8080/api/usuario/",{
         id: 1,
         usuario:"nuevapersona_01_post",
         password:"nueva_contra01_post"
     }
  ).then(
    (response)=>{
        if(response.status==200){
            alert("post correcto")
        }
    });

   axios
    .delete(
     "http://192.99.144.232:8080/api/usuario/${id}"
    ).then(
    (response)=>{
        if(response.status==200){
            alert("delete correcto")
        }
    });


  /*
  "id": 1,
  "usuario": "admin",
  "password": "admin12345",
  "createdAt": "2021-06-16T18:25:18.973Z",
  "updatedAt": "2021-06-23T21:56:51.388Z"
   */

  return (
   <Container component="main" maxWidth="xs">
   <CssBaseline />
   <div className={classes.paper}>
       <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
       </Avatar>
       <Typography component="h1" variant="h5">
           Registro Usuario
       </Typography>
       <form className={classes.form} noValidate>
           <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                   <TextField
                       value={nombre}
                       onChange={(evt) => {
                           console.log(evt)
                           setNombre(evt.target.value)
                       }}
                       autoComplete="fname"
                       name="firstName"
                       variant="outlined"
                       required
                       fullWidth
                       id="firstName"
                       label="Nombre"
                       autoFocus
                   />
               </Grid>
               <Grid item xs={12} sm={6}>
                   <TextField
                       value={apellido}
                       onChange={(evt) => {

                           setApellido(evt.target.value)
                       }}
                       variant="outlined"
                       required
                       fullWidth
                       id="lastName"
                       label="Apellido"
                       name="lastName"
                       autoComplete="lname"
                   />
               </Grid>
               <Grid item xs={12}>
                   <TextField
                       value={rut}
                       onChange={(evt) => {

                           setRut(evt.target.value)
                       }}
                       variant="outlined"
                       required
                       fullWidth
                       id="email"
                       label="Rut"
                       name="email"
                       autoComplete="email"
                   />
               </Grid>

           </Grid>
           <Button
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               onClick={() => Guardar()}
           >
               {accion}
           </Button>
           <Button
               fullWidth
               variant="contained"
               color="secondary"
               className={classes.submit}
               onClick={() => Eliminar()}
           >
               Eliminar
           </Button>
           <Grid container justify="flex-end">
               <MaterialDatatable
                   title={"Employee List"}
                   data={data}
                   columns={columns}
                   options={options}
               />


           </Grid>
       </form>
   </div>

</Container>
  );

}







