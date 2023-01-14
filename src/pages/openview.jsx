import React,{useState,useEffect} from 'react'
import '../app.css'
import '../index.css'
import Latest from '../components/latest'
import clap from '../img/clap.png'
import share from '../img/share.png'
// import img11 from '../img/11.jpg'
import dp1 from '../img/dpimg.png'
import Dpblck from '../components/dpblck'
import { useLocation } from 'react-router-dom'
// import {homeDataLatest} from '../datas/homeData'

export default function Openview() {

    const [homeDataLatest,setHomeDataLatest]=useState("");
    useEffect(()=>{
      fetch('https://p6backendstoreapi-d24sbg81d-sanjayperingayil2000.vercel.app/homeDataLatest')
      .then(response=>response.json())
      .then(json=>setHomeDataLatest(json))
      .catch(err=>console.log("error"))
  },[]);

  const location=useLocation();
  const {data }=location.state;
  console.log(data)
  
return (
    <>
    <div className='hde'><br/>
    <span className='lft'>
    <p className='rtt'>The</p>
        <span className='fs-1'>SKIES ON LAND</span>
    </span>
    <button className='gta'>Click for More</button>
    </div>
    <div className='mrg d-flex flex-row'>
        <div className='offf'  style={{width:"200%"}} >
            <span className="cp"><img src={clap} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.9k
            <br/><br/><img src={share} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;share this article</span>
        </div>  
        <div>  
        <br/><br/>
        <h1 style={{color:"black"}}>You can wander about it</h1><br/>
        <div className='icc'></div>
        <br/><br/>
        <div className='bgt'>{data.content}<br/><br/><br/>Nature is natural. Theres something about the outdoors that gets our blood flowing smoother and our heart beating stronger. Theres probably some sort of research about endorphins and all sorts of science that can explain why the wilderness refreshes us. These nature quotes on life and natural beauty will get you excited about being outside, whether you need it or not.</div>

        <br/><br/>
        <img className='nmn' src={data.img} alt=""/><br/><br/><hr/>
        <div className='grid-container'>
        <div>
        <img className='dp' src={dp1} alt=""/>
        </div>
        <div>
            <span className='hhh'>
            <b>Sanjays peaceful paradise 💖</b><br/>
            <span>ones who loves nature.</span></span>
        </div>
        </div>

        
    </div>
    </div><br /><br/><hr></hr><br/><br/>
    <div className='d-flex justify-content-between bggg gfh '>
    {
      homeDataLatest && homeDataLatest.map((val)=>{
        return(
          <>
            <Latest img={val.img} content={val.content} top={val.top} />
          </>
        )
      })
    }
    {/* <Latest data={homeDataLatest} /> */}
    </div><br />
    <div id='bch11'>
    <div className='d-flex justify-content-between bggg' id='bch'>
        <Dpblck/><Dpblck/><Dpblck/>
    </div></div><br /><br/><br/>
    </>
)
}
