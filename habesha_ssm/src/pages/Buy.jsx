import React from 'react'
import { useState } from 'react'
import BotomNav from '../components/bottomnav'
import Navbare from '../components/navbar';
const Buy = () => {
  const [activestate, setActive] = useState("buy");
  return (
    <div>
    <Navbare/>

    <BotomNav active={activestate} />
    </div>
  )
}

export default Buy