import React, { useEffect } from 'react'
import '../Styles/InputForm.css'
import {useNavigate} from 'react-router-dom'
import EnchanedComp from '../Components/EnchanedComp'
import {useFormik} from 'formik'

 function SignUp(props) {
    const navigate=useNavigate()
    
    const {disp,signUp}=props

    const initialValues={
        uname:'',
        pwd:'',
    }
    
    const updateData=(e)=>{
        e.preventDefault()
         signUp(formik.values.uname,formik.values.pwd)
         

    }
    const formik=useFormik({
        initialValues,
    })

  
  return (
    <div>
        <div className="login-box">
  <h2>SignUp form</h2>
  <h6>Please register your details for authentication</h6>

  <form>
    <div className="user-box">
      <input type="text" name="uname" required="" onChange={formik.handleChange} value={formik.values.uname}/>
      <label htmlFor='uname'>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="pwd" required="" onChange={formik.handleChange} value={formik.values.pwd}/>
      <label htmlFor='pwd'>Password</label>
    </div>
    {(disp.msg&&!disp.status)&&<h6 style={{color:'red'}}>{disp.msg}</h6>}
    <a href="#" style={{position:'relative',left:'100px',color:'white',zIndex:'500'}} onClick={updateData}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    <h5 style={{marginTop:'20px',cursor:'pointer'}} onClick={()=>navigate(-1)}>Back to Login page?</h5>
  </form>
</div>
    </div>
  )
}
export default EnchanedComp(SignUp)