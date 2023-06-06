import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import { Slider } from "@mui/material"
import "./AddProduct.css";
import ProductModel from "../../../Models/ProductModel";

function AddProduct(): JSX.Element {
    const [Product, setProduct] = useState<ProductModel[]>([]);
    const [amount, setAmount] = useState<Number>(0);
    const{register, handleSubmit}=useForm<ProductModel>();
    const navigate = useNavigate();

    function handleChange(e: any) {
        console.log({e});
        
        setAmount(e);
    }
    
    return (
        <div className="AddProduct">
			<h2>Add Product</h2>
            <Slider aria-label="Volume" value={0} onChange={handleChange} />
        </div>
    );
}

export default AddProduct;
