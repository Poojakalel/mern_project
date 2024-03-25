const express=require('express')
require('./config')
const Product=require('./product')
const fetch=require('node-fetch')
const Post=require('./product')
const { default: mongoose } = require('mongoose')

const app=express()
app.use(express.json())




app.get('/',(req,res)=>{
    res.send("welcome to api application")
})

app.get('/list',async(req,res)=>{
    let data=await Product.find()
    res.send(data)
})

app.post('/create',async(req,res)=>{
    // let data=new Product(req.body)
    // const result=await data.save()
    // res.send(result)

    let data=new Product(req.body)
    let result=await data.save(req.body)
    res.send(result)

})

async function getPosts(){
   let data=await fetch("http://localhost:3000/products")
   const response=await data.json()
//    console.log(response)
//    console.log(response)
 
for(let i=0;i<response.length;i++){

   const post= new Post({

    id:response[i]['id'],
    title:response[i]['title'],
    price:response[i]['price'],
    description:response[i]['title'],
    category:response[i]['category'],

    });

   post.save()
    // console.log(response[i]['id'])
}
}

getPosts()







app.listen(5000)