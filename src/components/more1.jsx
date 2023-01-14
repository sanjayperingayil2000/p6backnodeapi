import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom';

export default function More1(props) {
    // const data=props.data;
return (
    <>
    {/* {
        data.map((val)=>{
            return(
                <> */}
    <hr />
    <br />
    <Link to='/openview' state={{data:props}} style={{textDecoration:"none",color:"black"}}>
    <div className='d-flex align-items-center'>
        {/* <div className='picl11 pdd1'> */}
        <img src={props.img} className='picl11 pdd1' alt=""></img>
        {/* </div> */}
        <div className='pdd1'>
            <h6>{props.head}</h6>
            <span className='font-weight-light' style={{fontSize:"10px"}}>
            {props.content}
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-7'>$anjay Pering@yil</footer>
        </div>
    </div></Link>
    <br />
                {/* </>
            )
        })
    }
     */}
    </>
)
}
