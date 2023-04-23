import React, { useState } from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux"
import { addProduct } from '../Redux/ProductReducer/action';
const initialState={
  name:"",
  image:"",
  brand:"",
  price:"",
  category:"",
  gender:"",

}
export const Admin = () => {
  const [product,setProduct]= useState(initialState)
  const dispatch=useDispatch()
  const handleChange=(e)=>{
     const {name,value}=e.target
     setProduct((prev)=>{
      return {...prev,[name]:name==="price"? +value:value};
     })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addProduct(product))
    setProduct(initialState)
  }
  return (
    <DIV>
         <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
        
           <input type="text"name='name'  value={product.name} placeholder='Product Name' onChange={(e)=>handleChange(e)}/>
           <input type="text"name='image'  value={product.image} placeholder='Product Image' onChange={(e)=>handleChange(e)}/>
           <input type="text" name='brand'  value={product.brand}placeholder='Brand' onChange={(e)=>handleChange(e)}/>
           <input type="number"name='price' value={product.price}  placeholder='Price' onChange={(e)=>handleChange(e)}/>
    
           <select name="category" value={product.category} id="" onChange={(e)=>handleChange(e)}>
            <option value="">select category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="shoes">Shoes</option>
           </select>
           
           <select name="gender" value={product.gender} onChange={(e)=>handleChange(e)}>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Female</option>
            <option value="kids">Kids</option>
           </select>
            <button>Add Product</button>
        </form>
    </DIV>
  )
}
const DIV = styled.div`
width:400px;
margin: auto;
border:1px solid gray;
padding:100px;


input {
  width:80%;
  height:30px;
  font-size: large;
}

button {
  width:40%;
  height:35px;
}

form{
    display:flex;
    flex-direction:column;
    gap:15px;
    align-items:center;
}
select{
    width:50%;
    height:40px;
    font-size:large;
}
`;