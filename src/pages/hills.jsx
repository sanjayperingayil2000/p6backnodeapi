import React from 'react'
import Header from '../components/header'
import '../app.css'
import Xxx from '../components/xxx'
import { hillsDataMore,hillsDataMore1 } from '../datas/hillsData'

export default function Hills() {
  return (
    <>
    <Header />
    <br />
    <h1>Hills</h1>
    <div className='blne'></div> <br />
    <Xxx data={hillsDataMore} data1={hillsDataMore1}/>
    
    </>
  )
}
