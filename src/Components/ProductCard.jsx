import React from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { deleteProduct, getProducts } from '../Redux/ProductReducer/action'
import { Link } from 'react-router-dom'
const ProductCard = ({id,image,title,price,brand,category,gender}) => {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    
     dispatch(deleteProduct(id))
     
  }
  return (
    <DIV>
        <img src={image} alt="" width={"300px"} />
        <h3>{title}</h3>
         <h3>{price}</h3>
         <p>{brand}</p>
         <p>{category}</p>
         <p>{gender}</p>  
       <button onClick={handleDelete}>Delete</button>
       <button>
        <Link to={`/edit/${id}`}>Edit</Link>
       </button>
       
    </DIV>
  )
}

export default ProductCard


const DIV = styled.div`
 

`;


