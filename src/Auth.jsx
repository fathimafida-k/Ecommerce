import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserAPI, registerUserAPI } from './AllApi';
import { toast } from 'react-toastify';



function Auth({ insideregister }) {
  const [userData, setuserData] = useState({ name: "", email: "", password: "" });
 console.log(userData);
 const navigate = useNavigate()
//  register fn
 const handleRegister=async()=>{
    const{name,email,password} = userData
    if(name&&email&&password){
      try{
       const result = await registerUserAPI(userData)
       console.log("Registered data",result);
       if(result.status==200){

        toast.success("Registered Succesfully. Please login to get access of your account")
        navigate('/login')
        setuserData({name:"",email:"",password:""})


       }

       else if(result.status==400){
        
        toast.error(result.response.data)
       }
       
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.warning("Enter the fields completely")
    }
  }

//   login

const handleLogin=async()=>{
     const{email,password} = userData
     if(email&&password){
      const result = await loginUserAPI(userData)
      console.log("logined",result);
      if(result.status==200){

       
        sessionStorage.setItem("user",JSON.stringify(result.data.user))
           sessionStorage.setItem("token",result.data.token)

       const role = result.data.user.role; 
        if(role=="admin"){
          navigate('/admin')
        }
        else if(role=="user"){
          navigate('/')
        }
       
      }
      else if(result.status==403){
 toast.error(result.response.data)
      }
      
     }
     else{
      toast.warning ("Enter the fields completely")
     }
  }
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border:"1px solid rgba(2, 28, 41, 1)"
      }}
    >
      <h2
        style={{
          color: "#7b6a5b",
          fontFamily: "Playfair display",
          marginBottom: "20px"
        }}
      >
        {insideregister ? "Create your Account" : "Login to your Account"}
      </h2>

      <div
        style={{
          width: "38rem",
          height:"34rem",
          padding: "2rem 0",
          backgroundColor: "#ffffffb3",
        boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        {insideregister && (
          <>
            <input
              onChange={(e) =>
                setuserData({ ...userData, name: e.target.value })
              }
              value={userData.name}
              style={{ width: "80%" }}
              className="form-control"
              type="text"
              placeholder="Username"
            />
            <br />
          </>
        )}

        <input
          value={userData.email}
          onChange={(e) =>
            setuserData({ ...userData, email: e.target.value })
          }
          style={{ width: "80%" }}
          className="form-control"
          type="text"
          placeholder="Email"
        />
        <br />

        <input
          value={userData.password}
          onChange={(e) =>
            setuserData({ ...userData, password: e.target.value })
          }
          style={{ width: "80%" }}
          className="form-control"
          type="text"
          placeholder="Password"
        />
        <br />
  {insideregister ?
  
        <button
        onClick={handleRegister}
          className="btn mt-3"
          style={{
            fontFamily: "Inter",
            backgroundColor: "#061e37ff",
            color: "white",
            width: "70%"
          }}
        >
          Register
        </button>:<button
        onClick={handleLogin}
          className="btn mt-3"
          style={{
            fontFamily: "Inter",
            backgroundColor: "#061e37ff",
            color: "white",
            width: "70%"
          }}
        >
          Login
        </button>

  }

        {insideregister ? (
          <p style={{ fontFamily: "poppins" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "rgba(72, 40, 16, 1)" }}>
              Login
            </Link>
          </p>
        ) : (
          <p style={{ fontFamily: "poppins" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "rgba(72, 40, 16, 1)" }}>
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
