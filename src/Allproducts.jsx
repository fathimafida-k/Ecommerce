import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { getProductAPI } from './AllApi'
import { searchProductContext } from './ContextApi'

function Allproducts() {
    const [Product,setProduct] = useState([])
    const {searchKey} = useContext(searchProductContext)
    

      const getAllProduct=async()=>{
        try{
          const result=await getProductAPI(searchKey)
          console.log("get data",result);
          setProduct(result.data)
          
        }
        catch(err){
          console.log(err);
          
        }
      }
       useEffect(() => {
       getAllProduct()
       }, [searchKey])
    
  return (
    <div>
<div>
    <Header showFil={true} />
</div>


 <div style={{paddingTop:"6rem"}} className='row mt-5'>
      {Product.length ? 
      Product.map(item=>(  <div className='col-3 mt-2 mb-2'>    
            <ProductCard data={item}/></div>))
     : 
            <div className='text-center' style={{color:"#456",fontFamily:"Inter",borderRadius:"8px",padding:"10px 20px"}}><h2>No Projects to display</h2></div>
            }
            </div>
    


    </div>
  )
}

export default Allproducts