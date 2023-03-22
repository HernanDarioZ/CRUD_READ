import  Express  from "express";
import cors from "cors";
import db
 from "./database/Conecciondb.js";

import blogRoutes from "./routers/routes.js";


const app= Express()

app.use(cors())
app.use(Express.json)
app.use('/blogs',blogRoutes)

try{
    await db.authenticate()
    console.log("Conexion exitosa a la bd ")
}catch(error){

    console.log('El error de conexion es  : ${error}')
}

app.get('/',(req,res)=>{
  res.send("hola mundo")
})

app.listen(8000, ()=>{
    console.log("server up running in https://localhost:8000/")
})

