const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:{
        type:String,
    },

    rating:{
        rate:Number,
        count:Number,
    },
})

const Post=mongoose.model("product-name",productSchema)
module.exports=Post
// const Post=module.exports=mongoose.model('prod',productSchema)