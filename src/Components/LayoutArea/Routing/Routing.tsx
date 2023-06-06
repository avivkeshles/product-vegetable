import {Route, Routes} from "react-router-dom"
import "./Routing.css";
import Layout from "../Layout/Layout";
import Product from "../../ProductArea/Product/Product";
import AddProduct from "../../ProductArea/AddProduct/AddProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/product"  element={<Product />} />
                <Route path="/AddProduct"  element={<AddProduct />} />
            </Routes>
			
        </div>
    );
}

export default Routing;
