 // HAY DOS FORMAS PARA HACER LOS MODELOS CON SEQUELIZE, LA QUE SE VA HA USAR ES SEQUELIZE.Db.define

 // importamos la conxion de la base de datos
import db from "../database/Conecciondb";

// Importamos sequelize

import { DataTypes } from "sequelize";

const BlogModel =db.define('tablaModelo',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},

})

export default BlogModel


