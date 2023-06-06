import { MultiSelect} from "react-multi-select-component";
import "./Page.css";
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { shoppingCartItem } from "../ShoppingCart/ShoppingCartItem";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

type cartItems = {[key: string]: shoppingCartItem }

function Page(): JSX.Element {
    const divStyle ={
        // margin: 100,
        // width: 500,
        
    }

    const [shoppingCartItems, setShoppingCartItems] = useState<shoppingCartItem[]>([]);
    const [products, setProducts] = useState<{value:string, label:string}[]>([]);
    const fruits = [
        {value: "apple", label:"apple"},
        {value: "carrot", label:"carrot"},
        {value: "melon", label:"melon"},
        {value: "pear", label:"pear"},
        {value: "lemon", label:"lemon"},
        {value: "orange", label:"orange"},
        {value: "salad", label:"salad"},
    ]
    
    function onCardChange(details: any, amount: any) {
        console.log(details,amount)
        
        const { name, price } = details;
        let filterdItems = shoppingCartItems.filter( (item: shoppingCartItem) => {
            return item.name != details.name;
        })
        filterdItems.push({ name, price, amount})
        setShoppingCartItems(filterdItems)
    }

    function removeProduct(name: string) {
        let filteredProducts = products.filter( it => {
            return it.value !== name;
        })
        setProducts(filteredProducts);
    }
    
    const productCards = products.map((obj: {label: string, value: string})=> {
        return <ProductCard name={obj.value} onAmountChange={onCardChange} onRemoveClick={removeProduct}/>
    })
    
    
    const [selected, setSelected] = useState([]);
    return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 1,
          pb: 1,
        }}
      >
        <div className="Product">
            <h2>Welcome To Vegetables & co</h2>
            <MultiSelect
                options = {fruits} 
                value={products}
                labelledBy="Select Item to add to basket"
                onChange={setProducts}></MultiSelect>
             <Divider />
             <Grid container spacing={2}>
                {productCards}
             </Grid>
            <Divider />
            <ShoppingCart products={shoppingCartItems}/>
        </div>
        </Box>
        );
    }
    
    export default Page;
    