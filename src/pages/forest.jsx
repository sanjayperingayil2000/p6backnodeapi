import React,{useState,useEffect} from 'react'
import Header from '../components/header'
import '../app.css'
import Xxx from '../components/xxx'
// import {forestDataMore, forestDataMore1} from "../datas/forestData"

export default function Forest() {

    const [forestDataMore,setForestDataMore]=useState("");
    const [forestDataMore1,setForestDataMore1]=useState("");

    useEffect(()=>{
        fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/forestDataMore')
        .then((res)=>res.json())
        .then((json)=>setForestDataMore(json))
        .catch(err=>console.log("error"))
    },[]);
    useEffect(()=>{
        fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/forestDataMore1')
        .then(response=>response.json())
        .then(json=>setForestDataMore1(json))
        .catch(err=>console.log("error"))
    },[]);
// console.log(forestDataMore,forestDataMore1,"forestpage")

return (
    <>
    <Header />
    <br />
    <h1>Forest</h1>
    <div className='blne'></div> <br />
    
    <Xxx data={forestDataMore} data1={forestDataMore1}/>
    </>
)
}
