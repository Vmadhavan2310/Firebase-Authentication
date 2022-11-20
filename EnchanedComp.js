
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,RecaptchaVerifier,signOut,signInWithPhoneNumber} from 'firebase/auth'
import {auth} from '../Components/FirebaseDoc'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const EnchanedComp=OriginalComp=>{
    function NewComp() {
        const [disp,setDisp]=useState({
          msg:'',
          status:true,
        })
        const [test,setTest]=useState(true)
        const navigate=useNavigate()
        /* Sign UP */
        async function signUp(email,pwd){
          try{
             await createUserWithEmailAndPassword(auth,email,pwd)
            setDisp({...disp,msg:'success',status:null})
            navigate('../signup')
          }catch(err){
            setDisp({...disp,msg:err.message,status:false})
          }
        } 
        
        /* sign In */
         async function signIn(email,pwd){
          try{
            await signInWithEmailAndPassword(auth,email,pwd)
            setDisp({...disp,msg:'success',status:null})
            navigate('../mblOTP')
          }catch(err){
            setTest(false)
            setDisp({...disp,msg:err.message,status:false})
          }
          
          
        }
        
        /* google Authentication */
        async function googleSignIn(){
          const googleAuthProvider=new GoogleAuthProvider()
          try{

             await signInWithPopup(auth,googleAuthProvider)
              navigate('../mblOTP')
          }catch(err){
            console.log(err.message)
          }
        }
        /* Log out */
        async function logout(){
          try{
             await signOut(auth)
             navigate('/')
          }catch(err){
            console.log(err)
          }
        }

        /* Mobile OTP */
       const setUpRecaptcha=(num) =>  {
        const recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{},auth);
         recaptchaVerifier.render()
         return signInWithPhoneNumber(auth,num,recaptchaVerifier)
       }
        
        return <OriginalComp disp={disp} signIn={signIn} signUp={signUp} googleSignIn={googleSignIn} test={test} logout={logout} setUpRecaptcha={setUpRecaptcha}/>
      }
      return NewComp;
}


export default EnchanedComp;
