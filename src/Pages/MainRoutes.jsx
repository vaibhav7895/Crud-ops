import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Homepage } from './Homepage'
import { Admin } from './Admin'
import {Login} from "./Login"
import { PrivateRoute } from '../Components/PrivateRoute'
import { EditProduct } from './EditProduct'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/edit/:id' element={<PrivateRoute><EditProduct/></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes