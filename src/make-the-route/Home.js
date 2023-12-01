import { Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
// import { Changeprofilename } from './ChangeProfileName';
export function Home() {
  const[view,setView]=useState(true)
  let styles ={
    display : view ? "none" : "block",
    // background : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,30,1) 35%, rgba(0,212,255,1) 100%)",
    fontSize:"20px",
    padding:"10px",
    color:"black",
    margin:"0px",
    textAlign:"center"
  };
  return (
    <div className='main'>
      <div className="news-container">
        <div className="title">
            Important Note
        </div>
        <ul>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam!</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam!</li>
        </ul>
      </div>
      <LinearProgress sx={{ width: '100%', color: 'grey.500', height:'10px' }} color="success" />
      <div className='title'>
        <h1 style={{color:"white"}}>Welcome to MRM's Website</h1>
      </div>
      <LinearProgress sx={{ width: '100%', color: 'grey.500', height:'10px' }} color="secondary" />
      <div className='button-p'>
        <Button variant='contained' style={{width:"200px",height:"40px",marginLeft:"20px"}} onClick={()=>setView(!view)}>click to view quote</Button>
        <p style={styles}><q><b>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do</b></q></p>
      </div>
      {/* <Changeprofilename/> */}
    </div>
  );
}