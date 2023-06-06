import axios from "axios";
import ProductModel from "../Models/ProductModel";
import config from "../Utils/Config";
class ProductService{

    public async addProduct(bicycles: ProductModel):Promise<ProductModel>{
        const response = await axios.post<ProductModel>(config.bicyclesUrl, bicycles)
        const addedBicycles =response.data;
        return addedBicycles;
    }
    public getAllProducts = ()=>{
        fetch("")
        .then(response => {
            return response.json()
        })
    }
        
    }
   

const productService  = new ProductService();
export default productService