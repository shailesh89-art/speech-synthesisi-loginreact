
import React, { useState } from 'react';
import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate()

    const [user,setUser] = useState({

        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register =() =>{
        const{name,email,password,reEnterPassword}= user
        if (name && email && password &&(password === reEnterPassword)) {
            
            axios.post("http://localhost:9002/register",user)
            .then(res => alert(res.data.messag))

            navigate("/login")
        }else{
            alert("invalid input")
        }
        
       
    }
    return (

        <div className="register">
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your name " onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Your email"  onChange={handleChange} ></input>
        <input type="password" value={user.password} name="password"  onChange={handleChange} ></input>
        <input type="password" value={user.reEnterPassword} name="reEnterPassword"   onChange={handleChange}></input>
        <div className="button" onClick={register} >Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/")} >Login</div>
    </div>
    );
}

export default Register;