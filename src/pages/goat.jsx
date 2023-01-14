import React,{useState,useEffect} from 'react';

const Goat = () => {
    // const [forestDataMore,setForestDataMore]=useState("");
    // const [forestDataMore1,setForestDataMore1]=useState("");
    const [homeDataLatest,setHomeDataLatest]=useState("");

    // useEffect(()=>{
    //     fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/forestDataMore')
    //     .then((res)=>res.json())
    //     .then((json)=>setForestDataMore(json))
    //     .catch(err=>console.log("error"))
    // },[]);
    // useEffect(()=>{
    //     fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/forestDataMore1')
    //     .then(response=>response.json())
    //     .then(json=>setForestDataMore1(json))
    //     .catch(err=>console.log("error"))
    // },[]);
      useEffect(()=>{
    fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/homeDataLatest')
    .then(response=>response.json())
    .then(json=>setHomeDataLatest(json))
    .catch(err=>console.log("error"))
},[]);
    // console.log(forestDataMore,forestDataMore1,"goatpage");
    // console.log(forestDataMore1,"forestdatamore1 got");
    // console.log(forestDataMore,"forestdatamore got");
    console.log(homeDataLatest)


    return (
    <>
    this is goat🎯
    {
        homeDataLatest && homeDataLatest.map((val)=>{
            return(
                <>
                <h1>meenakshi</h1>
                <br/>
                {val}
                <br/><hr/>
                </>
            )
        })
    }
    </>
    )
}

export default Goat
