import { Card, Divider, Grid, Slider, colors } from "@mui/material"
import axios from "axios"
import { url } from "inspector"
import { useEffect, useState } from "react"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface productDetails  {
    price?: number,
    stock?: number,
    color?: string,
}

function ProductCard({name, onAmountChange, onRemoveClick}: { name: string, onAmountChange: Function, onRemoveClick: Function}) {
    
    const [productDetails, setProductDetails] = useState<productDetails>({});
    const[totalPrice, setTotalPrice] = useState(2);
    const[amount, setAmount] = useState(1);
    
    useEffect( ()=> {
        let fn = async function() {
            let res = await axios.get("https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/"+name)
            setProductDetails(res.data)
            onAmountChange(res.data, amount)
        }
        fn();
    }, [])
    
    function sliderChange(e:any) {
        let amount = e.target.value;
        setAmount(amount)
        if(productDetails.price) {
            
            setTotalPrice(amount * productDetails.price)
            onAmountChange(productDetails, amount)
        }
    }
    
    function removeItem() {
        onRemoveClick(name);
        onAmountChange(productDetails, 0);
    }
    
    
    return(<Grid item xs={5}> 
        <div style={{ "height": "10rem"}}>
            <button style={{ "float": "right"}} onClick={removeItem}>
                <DeleteOutlinedIcon/>
            </button>
            <div style={{backgroundColor: productDetails.color, padding:'5px' }}>name: {name}</div>
            <div>price : {productDetails.price }</div>
            <Slider defaultValue={amount} max={productDetails.stock} onChange={sliderChange} aria-label="Default" valueLabelDisplay="auto" />
            <div>item list: {name}</div>
            <div>total price:{totalPrice}</div>
            
        </div>
    </Grid>)
        
    }
    export default ProductCard