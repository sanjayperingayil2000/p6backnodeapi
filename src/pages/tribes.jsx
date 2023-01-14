import React from 'react'
import Header from '../components/header'
import '../app.css'
import Xxx from '../components/xxx'
import { tribesDataMore,tribesDataMore1 } from '../datas/tribesData'

export default function Tribes() {
  return (
    <>
    <Header />
    <br />
    <h1>Tribes</h1>
    <div className='blne'></div> <br />
    <Xxx data={tribesDataMore} data1={tribesDataMore1}/>
    </>
  )
}
