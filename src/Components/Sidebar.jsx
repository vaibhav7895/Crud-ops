import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialGender=searchParams.getAll('gender')
    const [gender, setGender]=useState(initialGender||[])
    const initialCategory=searchParams.getAll('category')
    const[category,setCategory]=useState(initialCategory||[])
    const initialOrder=searchParams.get("order")
    const [order,setOrder]=useState(initialOrder||"")
    

    useEffect(()=>{
     let params={
        gender,
        category,
     }
     order&&(params.order=order)
     setSearchParams(params)
    },[gender,category,order])
    const handleGender=(e)=>{
        const {value}=e.target
       let newGender=[...gender]
       if(newGender.includes(value)){
           newGender=newGender.filter(el=>el!==value)
       }else{
        newGender.push(value)
       }
       setGender(newGender)
    }
    const handleCategory=(e)=>{
       const {value}=e.target
       let newCategory=[...category]
       if(newCategory.includes(value)){
        newCategory=newCategory.filter(el=>el!==value)
       }else{
        newCategory.push(value)
       }
       setCategory(newCategory)
    }
    const handleSort=(e)=>{
     const {value}=e.target
     setOrder(value)
    }
    return (
        <div>
             <h3>Filter By gender</h3>
            <div>
                <input type="checkbox" onChange={handleGender}  value={"male"} checked={gender.includes("male")}/>
                <label>Men</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleGender} value={"female"} checked={gender.includes("female")}/>
                <label>Women</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleGender} value={"kids"} checked={gender.includes("kids")}/>
                <label>Kids</label>
            </div>
            <br />
            <h3>Filter By category</h3> 
            <div>
                <input type="checkbox" onChange={handleCategory} value={"top Wear"} checked={category.includes("top Wear")}/>
                <label>Top Wear</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCategory} value={"bottom wear"} checked={category.includes("bottom wear")}/>
                <label>Bottom Wear</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCategory} value={"shoes"} checked={category.includes("shoes")}/>
                <label>shoes</label>
            </div>
            <br />
            <h3>sort by Price</h3>
            <div onChange={handleSort}>
                <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
                <label>Ascending</label>
                <input type="radio" name='order' value={"desc"} defaultChecked={order==="desc"}/>
                <label>Descending</label>
            </div>
        </div>
        

    )
}
