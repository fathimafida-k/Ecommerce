import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FilterPanel from "./FilterPanel";
import { searchProductContext } from "./ContextApi";

function Header({showFil,insideLanding}) {
    const {setSearchKey,searchKey} = useContext(searchProductContext)
    console.log(searchKey);
      const [localSearch, setLocalSearch] = useState(searchKey);
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchKey(localSearch); 
    navigate("/home"); 
  };
 
    
 
  const [showFilter, setShowFilter] = useState(false);
 const handleLogout=()=>{
    sessionStorage.clear()
    navigate('/')
    
 }
     
  return (
    <Navbar
      expand="lg"
      style={{
        padding: "0.7rem 2rem",
        background: "#0f172a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
      }}
      fixed="top"
    >
      <Container fluid className="d-flex align-items-center">

        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
           <h3 style={{fontFamily:"amatic sc",color:"white"}}>Raynott E-Tech</h3>
          </Link>
        </div>

        <div className="d-flex justify-content-center" style={{width:"50%"}}>
     {showFil &&         <input
              onChange={(e)=>setSearchKey(e.target.value)} 
           
    type="text"
    placeholder="Search"
    className="form-control"
    style={{
      backdropFilter: "blur(10px)",
      background: "rgba(255, 255, 255, 0.7)",
      border: "1px solid rgba(255,255,255,0.5)",
      borderRadius: "10px",
      padding: "12px 18px",
      color: "#2b1d16",
      outline: "none",
      width:"40%",
      flex: 1,   
    }}
  /> }
        </div>
{/* 
        <Navbar.Toggle aria-controls="main-navbar" className="ms-auto" />

        <Navbar.Collapse
          id="main-navbar"
          className="justify-content-center"
          style={{ flexGrow: 1 }}
        >
          <Nav style={{ gap: "2rem", fontWeight: 500 }}>

            <Nav.Link as={Link} to="/" style={{ color: "#222" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#222" }}>
              About
            </Nav.Link>
       



            <Nav.Link as={Link} to="/contact" style={{ color: "#222" }}>
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse> */}

        <div>

            



  {showFil ? <div style={{ display: "flex", gap: "10px" }}>


    <button
      onClick={() => setShowFilter(!showFilter)}
      className="btn"
      style={{
        color: "#1f1f34ff",
        fontWeight: "600",
        backgroundColor:"white",
        // backdropFilter: "blur(6px)",
        padding: "8px 14px",
      }}
    >
      Filters<i class="fa-solid fa-caret-down"></i>
    </button>

   {showFilter && 
   <div style={{ position: "absolute",
        top: "100%",
        right: "24px",
        marginTop: "10px",
        zIndex: 1000,}}>
            <FilterPanel  onClose={() => setShowFilter(false)}    />
        </div>

   }

  </div>:
  sessionStorage.getItem("token") ?
           <button
           onClick={handleLogout}
            className="btn"
            style={{
              backgroundColor: "#003366",
              color: "white",
              padding: "0.45rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
          Logout<i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button> :  <Link
            to="/login"
            className="btn"
            style={{
              backgroundColor: "#003366",
              color: "white",
              padding: "0.45rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            Login
          </Link>
  }


 

        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
