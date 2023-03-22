import BlogModel from "../modules/BlogModelos.js";


// ** Metodos para el crud **/

// ** Mostrar todos los registro **/
export const getAllBlogs= async(req,res) =>{
   try {

    const blogs = await BlogModel.findAll()

    res.json(blogs)
     
   } catch (error) {

    res.json({message: error.message})
    
   } 

}

// ** Mostrar un registro  **/

export const getblog= async (req,res)=>{
    try {

    const blog= await BlogModel.findAll({
        where:{
            id:req.params.id

        }
    })
    res.json(blog)
    
    } catch (error) {

        res.json(message.error.message)
        
    }

}

// **Crear un registro  **/

export const createblog = async (req, res) => {
    try {

         await BlogModel.create(req,body)
         res.json({

           "message":"Registro creado correctamente"
        })

        } catch (error) {
    
            res.json({message:error.message})
            
        
        }
    }

// ** Actualizar un registro  **/

export const updateBlog= async (req,res)=>{
    try {
       await BlogModel.update(req,body,{
            where: {id: req.params.id}
        })

        res.json({
            "message":"Registro Aptualizado correctamente "
        })
    } catch (error) {

        res.json({message:error.message})
        
    }
}

// ** Eliminar un registro un  registro **/

 export const DeleteBlog= async (req,res) =>{
    try {
    await BlogModel.destroy({
        where: {id: req.params.id}
     })
     
     res.json({"message":"Registro eliminado correctamente "})
        
    } catch (error) {

        res.json({message:error.message})
        
    }
 }
         
        





