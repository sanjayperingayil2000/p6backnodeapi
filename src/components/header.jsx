import React,{useState} from 'react';
import '../index.css';
import '../app.css'
import {NavLink} from 'react-router-dom'

export default function Header() {

const [Show,setShow]=useState("pt1")
const Show1=()=>{
  setShow("pt11")
}

  return (
    <>
    <br/>
    <div className='text-center'>
    <p className='rtt'>The</p>
    <span className='fs-1 ss'>SKIES ON LAND</span>
    </div>
    <div className='menu' onClick={Show1}></div>
    <div id={Show} className=' nsn'>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/">Home</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/hills">Hills</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/forest">Forest</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/lakes">Lakes</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/tribes">Tribes</NavLink>
    </div>

    <div className='pt nsn'>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/">Home</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/hills">Hills</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/forest">Forest</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/lakes">Lakes</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/tribes">Tribes</NavLink>
        {/* <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/goat">goat</NavLink> */}
    </div>
    <hr className='hdtp' />
    </>
  )
}
