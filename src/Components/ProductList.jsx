import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from '../Redux/ProductReducer/action'
import ProductCard from './ProductCard'
import styled from "styled-components"
import { useLocation, useSearchParams } from 'react-router-dom'
export const ProductList = () => {
    const [searchParams]=useSearchParams()
    const products=useSelector((store)=>store.ProductReducer.products)
    const location=useLocation()
    const dispatch=useDispatch()

    let obj={
      params:{
        gender:searchParams.getAll("gender"),
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order")&&"price",
        _order:searchParams.get("order")
      }
    }
    
    useEffect(()=>{
      dispatch(getProducts(obj))
    },[location.search])
  return (
    <DIV>
      {products.length>0&&products.map((el)=>{
        return <ProductCard key={el.id}{...el}/>
      })}
    </DIV>
  )
}


const DIV= styled.div`
display:grid;
grid-template-columns:auto auto auto;
grid-gap:20px 20px;

`;