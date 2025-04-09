import express from 'express';

const app = express()
app.use(express.json());

const port = 3000

const Product = [
  {id:1 , name :"P1",price:50},
  {id:2 , name :"P2",price:30},
  {id:3 , name :"P3",price:60}
];



app.post("/product",(req,res)=>{
  const {name , price} = req.body;
  const newProduct = {id:Product.length+1 , name , price}
  Product.push(newProduct)
  console.log(Product);
  res.status(201).json({
    msg:"Successful",Product})
})


app.get("/product",(req,res)=>{
  res.status(200).json(Product)
})



app.put("/product/:id",(req,res)=>{
  const {id} = req.params;
  const {name , price} = req.body;
  const index = Product.findIndex(Product => Product.id === parseInt(id));
  if(index == -1){
    res.status(404).json({msg:"Product not found"});
  }
  Product[index] = {...Product[index] , name , price}
  res.status(200).json({msg:"Successful update product details",Product})
})



app.patch("/",(req,res)=>{
  const {id} = req.params;
  const {name , price} = req.body;
  const index = Product.findIndex(P => P.id === parseInt(id));
  if(index == -1){
    res.status(404).json({msg:"Product not found"});
  }
  if(name){
    Product[index].name = name;
  }
  if(price){
    Product[index].price = price;
  }
  res.status(200).json({msg:"Successful update product details",Product})
})



app.delete("/product/:id",(req,res)=>{
  const {id} = req.params;
  const index = Product.findIndex(p => p.id === parseInt(id));
  if(index == -1){
    res.status(404).json({msg:"Product not found"});
  }
  Product.splice(index,1);
  res.status(200).json({msg:"Successful delete product",Product})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})