import React from "react";
import "./menu.css";
import Products from "../Products/Products";
import { Link } from "react-router-dom";


let Menu = ()=>{
     
return <div className="menu">
    <Link to="/Products"><button className="button">Products</button></Link>
    <Link to="/Category"><button className="button">Category</button></Link>
    <Link to="/Cart"><button className="button">Cart</button></Link>
    <Link to="/Users"><button className="button">Users</button></Link>
    <Link to="/Login"><button className="button">Login</button></Link>
    </div>
};
export default Menu;