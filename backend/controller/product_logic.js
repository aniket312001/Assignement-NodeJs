const Product = require('../model/product')

const addProduct =async (req,res)=>{
   try {
      const prod = await Product.create(req.body)
      return res.json(prod)   
  } catch (error) {
      return res.json(error)
  }
}

const getProduct = async (req,res)=>{
   prod = await Product.find()
    res.json(prod)
    return
}

const getProductById = async (req,res)=>{
   result = await Product.findById(req.params.id)

   if(!result){
       res.json("User Not Found")
       return
   }

   res.json(result)
   return
}

const updateProduct = async(req,res)=>{
   try {
      const update = await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
      res.json("Updated Successfully")
      return
      
  } catch (error) {
      return res.json(error)
  }
}

const deleteProduct = async(req,res)=>{
   try {
      await Product.findByIdAndDelete(req.params.id)
      res.json("Delete Successfully..")
      return
  } catch (error) {
      res.json("Not Found")
      return
  }
}

const getAllProductByUserId = async (req,res) =>{
   try {
       const prod = await Product.find({userId:req.params.id})
       res.json(prod)
       return
   } catch (error) {
       res.json("Not Found")
       return
   }
}



module.exports = {
   getProduct,
   updateProduct,
   deleteProduct,
   addProduct, 
   getProductById,
   getAllProductByUserId
}