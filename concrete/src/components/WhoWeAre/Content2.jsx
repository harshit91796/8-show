import React from 'react'
import '../../font/fontFile.css'
import { meeting } from '../../assets/image'

function Content2() {
  return (
    <div>
      <div className='text-9xl m-10 flex flex-col gap-20' >
         <h1 >Who We Are</h1>
         <div className='flex gap-10 h-[200px]'>
            <p className='text-xl flext-1 w-[2050px]'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse ex recusandae nemo. Amet pariatur beatae, eum tempora saepe esse numquam ducimus necessitatibus eius excepturi totam dolor. Nisi, et quia! ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-xl flext-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos ad eaque nostrum quibusdam, consequuntur est soluta officiis aliquid itaque provident. Nulla doloremque atque provident magni et at omnis aut? </p>
            <img src={meeting} className='flex-1 w-[400px]'/>
                
         </div>
      </div>
    </div>
  )
}

export default Content2
