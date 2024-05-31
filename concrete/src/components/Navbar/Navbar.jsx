import React from 'react'
import './navbar.css'
import { ArrowOutward, Circle, DragHandle } from '@mui/icons-material'
import '../../font/fontFile.css'

function Navbar() {
  return (
    <div className='navContainer fixed top-0 left-0 right-0 flex  text-2xl m-5 gap-20'>
      <div className='flex-1' >
           <Circle/>
           <Circle/>       
      </div>
      <span className='flex justify-center items-center gap-1'>EN</span>
      <span className='flex justify-center items-center gap-1'>
        <h1 style={{ fontFamily: 'Major Mono Display' ,fontWeight: 900}} >contact us</h1>
        <ArrowOutward/>
      </span>
      <span className="flex justify-center items-center  ">
      {/* This text will be small on small screens, large on medium and large screens. */}
      <DragHandle style={{fontSize: '50px'}}/>
    </span>
    </div>
  )
}

export default Navbar
