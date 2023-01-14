import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom'


export default function Latest(props) {
    // const data = props.data;
return (
    <>
    <div className='d-flex justify-content-between'>
         {/* {
        data.map((val)=>{
            return(
            <> */}
            
            <Link to='/openview' state={{data:props}} style={{textDecoration:"none",color:"black"}}>
            <div className='latest'>
                <img src={props.img} className='picl' alt=""></img>
                <br/>
                <div className='pad'>
                    <h4>Love the nature {props.top}</h4>
                    <h4>It has the power of healing</h4>
                    <span className='font-weight-light small'>{props.content}</span>
                </div>
            </div>
            </Link>
            
            {/* </>
            )
        })
        } */}

    </div>
    </>
)
}
