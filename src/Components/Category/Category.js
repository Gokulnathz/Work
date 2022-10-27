import React from 'react'
import './category.css'

let Category=(props)=> {
  return (
    <><div className="products"><button className="products"onClick={(e) => props.onCategorySelect("Electronics")}>Electronics</button></div>
    <div className="products"onClick={(e) => props.onCategorySelect("Jwellery")}>Jwellery</div>
    <div className="products"onClick={(e) => props.onCategorySelect("Men's Clothing")}>Men's Clothing</div>
    <div className="products"onClick={(e) => props.onCategorySelect("women's Clothing")}>Women's Clothing</div>
    </>
  )
}

export default Category