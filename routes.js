import * as handlers from "./handlers.js";



export function init(express , app){
app.use(express.json());

app.route("/product",)
.get(handlers.getProducts)
.post(handlers.addProduct)

app.route("/product/:id",)
.put(handlers.updateProduct)
.delete(handlers.deleteProduct)
 
}
