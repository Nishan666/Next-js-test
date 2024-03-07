'use client'

import React, { useState } from 'react'

const Timekeeper = () => {
    const [time , setTime] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
    
  return (
    <div>{time}</div>
  )
}

export default Timekeeper