import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import "./Product.css";

function Product(): JSX.Element {
    const divStyle ={
        margin: 100,
        width: 500,
        
    }

    const fruits: {id:string,name:string,price:number,stock: number}[]=[
        {id:"apple",name:"apple",price: 3,stock:12},
        {id:"carrot",name:"Carrot",price: 2,stock:8},
        {id:"melon",name:"Melon",price: 4,stock:20},
        {id:"pear",name:"Pear",price: 7,stock:0},
        {id:"lemon",name:"Lemon",price: 1,stock:6},
        {id:"orange",name:"Orange",price: 6,stock:22},
        {id:"salad",name:"Salad",price: 2,stock:17},
    ]
    console.log(fruits);
    
    return (
        <div className="Product"  style={divStyle}>
			<MultiSelectComponent
                  placeholder ="Select to add item to basket"
                  dataSource = {fruits} 
                //  query={dataQuery}
                  fields={{value:"id",text:"name"}}
                  
            ></MultiSelectComponent>
               
               
        </div>
    );
}

export default Product;
