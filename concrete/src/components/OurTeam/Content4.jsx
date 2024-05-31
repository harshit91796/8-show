import React from 'react'
import { con, meeting } from '../../assets/image'

function Content4() {
  return (
    <div>
      <div className='text-xl flex gap-10 h-[320px] '>
          <div className='flex-1' >
             <h1 className='text-9xl text-center'>Our Team</h1>
             <div className=' text-6xl mt-[7%] '>
                <h1 className='text-center text-slate-400 mb-4'>JOSEPH RAY</h1>
                <h1 className='text-center'>MICHAEL WALKER</h1>
             </div>
          </div>
          <div className='flex gap-10 mt-20 w-[50%] '>
             <img src={meeting} className='w-[200px] h-[100%]' alt="" />
             <div className='mt-10'>
               <h1 className='text-bold'>MICHAEL WALKER</h1>
               <h1 className='text-slate-400'>FOUNDER</h1>
               
               <p className='w-[300px] mt-5' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae! </p>
             
             </div>
          </div>
      </div>
      <div className='text-6xl flex flex-col gap-2 text-slate-400'>
         <h1 className='ml-[200px]'>EMMA WATSON</h1>
         <h1 className='ml-[100px]'>JOSEPH RAY</h1>
        <h1 className='ml-[220px]'>JOHN DOE</h1>
      </div>
    </div>
  )
}

export default Content4
