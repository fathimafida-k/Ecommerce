import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteProductAPI, getProductAPI } from './AllApi';
import SERVER_URL from './SERVER_URL';

function AdminDashboard() {
    const navigate = useNavigate()
   const  handleLogout=()=>{
    sessionStorage.clear()
    navigate('/')
    
 }
const [Product,setProduct] = useState([])

  const getAllProduct=async()=>{
    try{
      const result=await getProductAPI("")
      console.log("get data",result);
      setProduct(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
  }
   useEffect(() => {
   getAllProduct()
   }, [])

   const deleteProduct=async(id)=>{
      const token = sessionStorage.getItem("token")
        if(token){
      const reqHeader={
        "content-type" : "application/json",
         "authorization": `Bearer ${token}`
    }
    try{
      const result=await deleteProductAPI(id,reqHeader)
      console.log("data...",result);
      if (result.status==200) {
         getAllProduct()      
      }
      

    }
    catch(err){
      console.log();
      
    }
  }
  }
   
  return (
<div style={{ width: "100%", minHeight: "100vh", overflowX: "hidden" }}>


        <div  style={{
    width: "100%",
    backgroundColor: "#11084dff",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    position: "relative",
    flexWrap: "wrap"}}>

  <button
        onClick={handleLogout}
        style={{
          background: "rgba(19, 19, 48, 1)",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          float: "right",
          fontFamily:"lora"
        }}
      >
        Logout<i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
        </div>
     <div style={{ padding: "40px" }}>
      <h1 className='text-center' style={{fontFamily:"playfair display",color:"#234"}}>Admin Dashboard</h1>

    

      <Link to="/add">
        <button
          style={{
            background: "#616816ff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            marginBottom: "20px",
            fontFamily:"lora"
          }}
        >
          <i class="fa-solid fa-plus"></i> Add Product
        </button>
      </Link>
<div style={{ width: "100%", overflowX: "auto", padding: "20px" }}>
  {Product.length>0 ?  <Table bordered hover className="admin-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Image</th>
        <th>Price</th>
        <th>View Details</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>

    <tbody>

     {Product.map((item,index)=>(<tr>
        <td>{index+1}</td>
        <td>{item.Pname}</td>
        <td>
          <img
           src={`${SERVER_URL}/uploads/${item.image}`}
            style={{ width: "60px", height: "60px", borderRadius: "8px" }}
          />
        </td>
        <td>₹{item.price}</td>
  <td><Link to={`/view/${item._id}`}>View</Link></td>
        <td style={{color:"rgba(34, 36, 68, 1)",fontSize:"1.3rem"}}>
          <i class="fa-regular fa-pen-to-square"></i>
        </td>

        <td style={{fontSize:"1.3rem"}} className="text-danger">
         <button className='btn text-danger' onClick={()=>deleteProduct(item._id)}> <i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>)) }
    </tbody>
  </Table>:
  <p className='text-center' style={{fontFamily:"lora"}}>No Products added yet</p>
  }
</div>


    </div>


    </div>
  )
}

export default AdminDashboard