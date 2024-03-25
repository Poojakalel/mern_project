const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    Image:String,
    rating:Number

      


        

   
}) 


const Post=module.exports=mongoose.model('prod',productSchema)











