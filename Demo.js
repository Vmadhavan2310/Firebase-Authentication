import React, { useEffect, useState } from 'react'
import '../Styles/InputForm.css'

import {useFormik} from 'formik'
import EnchanedComp from '../Components/EnchanedComp'


 function Demo(props) {
   
    const {disp,signIn,signUp,googleSignIn,test}=props

    const initialValues={
        uname:'',
        pwd:'',
    }
    
    const onSubmit=(e)=>{
      e.preventDefault()
        signIn(formik.values.uname,formik.values.pwd)
    } 

   const formik= useFormik({
    initialValues,
    onSubmit,
    })


  return (
    <div>
        <div className="login-box">
  <h2>Login</h2>
  <h5 ><a href='#' style={{textDecoration:'none',color:'yellow',cursor:'pointer'}}>Don't have an account? Sign Up</a></h5>
  <h5><a onClick={()=>googleSignIn()} style={{textDecoration:'none',color:'yellow',cursor:'pointer'}}>Or Sign In with Google Account</a></h5>

  <form>
    <div className="user-box">
      <input type="text" name="uname" onChange={formik.handleChange} value={formik.values.uname}/>
      <label htmlFor='uname'>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="pwd" onChange={formik.handleChange} value={formik.values.pwd}/>
      <label htmlFor='pwd'>Password</label>
    </div>
    {(disp.msg&&!disp.status)&&<h6 style={{color:'red'}}>{disp.msg}</h6>}
    <a style={{position:'relative',left:'100px',color:'white',zIndex:'500',cursor:'pointer'}} type='submit' role='button' onClick={onSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    
  </form>
  
</div>
    </div>
  )
}

export default EnchanedComp(Demo)
