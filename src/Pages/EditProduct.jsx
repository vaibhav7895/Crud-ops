import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProduct } from '../Redux/ProductReducer/action'

export const EditProduct = () => {
  const [price,setPrice]=useState(0)
  const {id}=useParams()
  const products=useSelector((store)=>store.ProductReducer.products)
  const dispatch=useDispatch()
  useEffect(()=>{
    const data=products.find((el)=>el.id=== +id);
     setPrice(data.price)
  },[])
  const handleChange=(e)=>{
    setPrice(e.target.value)
  }
  const handleEdit=()=>{
    const data={price}
    dispatch(editProduct(id, data))
  }
  return (
    <div>
      <h1>{id}</h1>
      <input type="number" onChange={handleChange} value={price}/>
      <button onClick={handleEdit}>Update</button>
    </div>
  )
}
