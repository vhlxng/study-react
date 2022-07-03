import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { notification } from 'antd/es'

const Preset = () =>{
  const myStyle={
    backgroundImage: 
"url('hoanghon.jpg')",
    width : '800px',
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return(
    <div className ='flex'>
      <div style={myStyle}>
    </div>
    </div>
     
  )
}
export default Preset