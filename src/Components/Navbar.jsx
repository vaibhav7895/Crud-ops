import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { getProducts } from '../Redux/ProductReducer/action'
export const Navbar = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  let ref = useRef()
  const paramObj = {
    params: {
      q: query && query
    }
  }
  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current)
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj))
    }, 1000)


  }, [query])
  return (
    <DIV>
      <h3>Product Page</h3>
      <Link to={'/'}> Home</Link>
      <Link to={'/admin'}>Admin</Link>
      <Link to={'/login'}> Login</Link>
      <Link to={'/edit/1'}> Edit</Link>
      <input type="text" placeholder='search' onChange={(e) => setQuery(e.target.value)} />
    </DIV>
  )
}

const DIV = styled.div`
display :flex;
align-items:center;
gap:20px;
border-bottom:1px solid gray;
`;