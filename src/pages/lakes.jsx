import React from 'react'
import Header from '../components/header'
import '../app.css'
import Xxx from '../components/xxx'
import { lakesDataMore,lakesDataMore1 } from '../datas/lakesData'

export default function Lakes() {
  return (
    <>
    <Header />
    <br />
    <h1>Lakes</h1>
    <div className='blne'></div> <br />
    <Xxx data={lakesDataMore} data1={lakesDataMore1}/>
    </>
  )
}
