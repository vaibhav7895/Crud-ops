import React, { useState } from 'react'
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import {useLocation, useNavigate} from "react-router-dom"
import { login } from '../Redux/AuthReducer/action'
export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const Auth=useSelector((store)=>store.AuthReducer.isAuth)
   const location = useLocation()
  
  const handleLogin=(e)=>{
    e.preventDefault()
    const userData={
      email,
      password,
    }
   dispatch(login(userData)).then(()=>{
    navigate(location.state)
   })
   
  }
  return (
    <DIV Auth={Auth}>
      <h3>{Auth?"Login Successful":"Login To Continue"}</h3>
      <FORM onSubmit={handleLogin}>
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button>submit</button>
      </FORM>
    </DIV>
  )
}
const DIV = styled.div`
  width:400px;
  margin:auto;
  border:1px solid gray;
  padding:100px;
   
  h3{
    color:${({Auth})=>(Auth?"green":"red")}
  }
  
  input {
    width:80%;
    height:20px;
    font-size: large;
  }

  button {
    width:20%;
    height:35px;
  }
`;



const FORM = styled.form`
display:flex;
flex-direction:column;
gap:15px;
align-items:center;
`;