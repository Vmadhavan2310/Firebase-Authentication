import React, { useEffect, useState } from 'react'
import EnchanedComp from './EnchanedComp';
import { useNavigate } from 'react-router-dom';
import '../Styles/InputForm.css'
import { Button } from '@mui/material'
import PhoneInput from 'react-phone-number-input'


function MblOTP(props) {
  const [confirmOBJ, setConfirm] = useState('')
  const [show, setShow] = useState(true)
  const [inputValue, setValue] = useState({
    mbl:'',
    otp:''
  })
  const [err,setError]=useState('')
  const navigate = useNavigate()

  /* Captcha */
  const { setUpRecaptcha } = props
  const getOTP = async (e) => {
    const num='+91'+inputValue.mbl
    e.preventDefault()
    try {
      await setUpRecaptcha(num)
        .then(res => setConfirm(res))
        setShow(false)
    } catch (err) {
      setError(err.message)
    }
  }

  console.log(confirmOBJ)
  /* Verify OTP */
  const verifyOTP = async (e) => {
    e.preventDefault()
    try {
      await confirmOBJ.confirm(inputValue.otp)
      navigate('../homepage')
    } catch (err) {
      setError(err.message)
    }
  }

  /* store state */

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value
    setValue({...inputValue,[name]:value})
  }

  return (
    <>
      <div className="login-box" style={{ display: show ? 'block' : 'none' }}>
        <form onSubmit={getOTP}>
          <div className="user-box" >
            <input type="text" name="mbl" value={''||inputValue.mbl} onChange={handleChange}/>
            <label htmlFor='mbl'>Enter Your Mobile Number</label>
          </div>
          <div id='recaptcha-container'></div>
          {err.length>0&&<h6 style={{color:'red',marginTop:'20px'}}>{err}</h6>}
          <Button variant='contained' sx={{ position: 'relative', left: '80px', top: '20px' }}
          type='submit'
          >
            Generate OTP
          </Button>
    <h5 style={{marginTop:'40px',cursor:'pointer'}} onClick={()=>navigate(-1)}>Back to Login page?</h5>

        </form>
      </div>

      {/* OTP */}
      <div className="login-box" style={{ display: show ? 'none' : 'block' }}>
        <form onSubmit={verifyOTP}>
          <div className="user-box" >
            <input type="text" name="otp" value={inputValue.otp} onChange={handleChange}/>
            <label htmlFor='otp'>Enter OTP</label>
          </div>
          {err.length>0&&<h6 style={{color:'red'}}>{err}</h6>}
          <Button variant='contained' sx={{ position: 'relative', left: '80px', top: '20px' }} type='submit'>
            Verify OTP
          </Button>

        </form>


      </div>
    </>
  )
}
export default EnchanedComp(MblOTP);
