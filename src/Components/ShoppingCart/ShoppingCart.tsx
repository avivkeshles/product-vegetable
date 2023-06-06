import { Card, Divider, Grid, Slider, colors } from "@mui/material"
import axios from "axios"
import { url } from "inspector"
import { useEffect, useState } from "react"
import { shoppingCartItem } from "./ShoppingCartItem"
import Button from '@mui/material/Button';




function ShoppingCart({products}: {products:shoppingCartItem[]}) {
    
    async function submitCart(e: any) {
        let hasErrors = false;
        let postBody = [];
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            postBody.push({
                
                "id": product.name.toLowerCase(),
                "amount": product.amount
                
            })
        }
        let res = await axios.post('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/', 
        postBody, {
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        
        if(res.status != 200) {
            hasErrors = true;
        }
        if(!hasErrors) {
            alert("The Shopping Cart has been submitted");
        }
        
    }
    
    let totalPrice = 0;
    
    let list = products.map( (product ) => {
        if(product.amount == 0) {
            return <></>
        }
        totalPrice += product.price   * product.amount;
        return (
            <Grid container spacing={2}>
                <Grid item xs={5} className="cart-name">{product.name}</Grid>
                <Grid item xs={5} className="cart-amount ">{product.amount}KG</Grid>
            </Grid>
            
            )
        })
        
        
        
        return(<Card>
                <h3>Shopping Cart</h3>
                {list}
                <div>
                    <br />
                <Divider/>
                <br />
                <div><b>Total Price</b>:{totalPrice}$</div>
                <br />
                <div>
                    <Button variant="contained" onClick={submitCart}>Submit</Button>
                </div>
            </div>
        </Card>)
            
        }
        export default ShoppingCart