import React from 'react'
import '../Styles/HomePage.css'
import EnchanedComp from './EnchanedComp'
import {Grid,Container,Button,Typography} from '@mui/material'

 function HomePage(props) {
  const {logout}=props
  return (
    <div >
      <Grid container sx={{color:'white',textAlign:'center',fontFamily:'timesNewRoman'}}>
        <Container>
        <Grid item xs={12} sx={{lineHeight:'40px',display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <div>
        <Typography variant='h4' sx={{fontWeight:'bold',textDecoration:'underline',margin:'40px'}}>HomePage</Typography>
        <dt>What is Lorem Ipsum?</dt>
        <dd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dd>
        <hr/>
        <dt>Where does it come from?</dt>
        <dd>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</dd>
         <br/>   
            <dd>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced</dd>
        <hr/>
        </div>
        <Button variant='contained' onClick={logout} sx={{cursor:'pointer',margin:'40px'}}>Logout</Button>
        </Grid>
        </Container>
      
      </Grid>
        
    </div>
  )
}

export default EnchanedComp(HomePage)