import { useEffect, useState } from "react";

export default function HomePage() {


  function onMouseMoving(){
    console.log('🖱️🐁🪤')
  }


  function onUnmount() {
    console.log('the home page is gone')
    document.removeEventListener('mousemove', onMouseMoving)
  }

  function onMounted(){
    console.log('the home page is ready')
    
    document.addEventListener('mousemove', onMouseMoving)


    return onUnmount
  }


  // this is an onmounted
  useEffect(onMounted, [])


  return (
    <div className="home-page">

    </div>
  )
}