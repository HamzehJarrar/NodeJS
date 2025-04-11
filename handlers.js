
export const Products = [
     {id:1 , name :"P1",price:50},
     {id:2 , name :"P2",price:30},
     {id:3 , name :"P3",price:60}
    ];


export const addProduct = (req, res) => {
    const {name , price} = req.body;
    const newProduct = {id:Products.length+1 , name , price}
    Products.push(newProduct)
    res.status(201).json({msg:"add product successful",Products})
}

export const updateProduct = (req, res) => {
    const {id} = req.params;
    const {name , price} = req.body;
    const index = Products.findIndex(Product => Product.id === parseInt(id));
    if(index == -1){
        return res.status(404).json({msg:"Product not found"});
    }
    if(name){
        Products[index].name = name;
    }
    
    if(price){
        Products[index].price = price;
    }

    
    res.status(200).json({msg:"update product successful",Products})
}

export const deleteProduct = (req, res) => {
    const {id} = req.params;
    const index = Products.findIndex(Product => Product.id === parseInt(id));
    if(index == -1){
        res.status(404).json({msg:"Product not found"});
    }
    Products.splice(index,1);
    res.status(200).json({msg:"delete product successful",Products})
}
export const getProducts = (req, res) => {
    res.status(200).json(Products)
}