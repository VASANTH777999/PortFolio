import React, { useEffect } from 'react'
import {preLoaderAnim} from "../../animations/index"
import "./Preloader.css"

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className='preloader'>
      <div className="texts-container">
      <span>Kotluri</span>
      <span>Vasanth</span>
      <span>Kumar</span>
      </div>
    </div>
  )
}

export default Preloader
