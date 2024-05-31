import React from 'react'
import { last, sendd } from '../../assets/image'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'

function Content5() {
  return (
    <div className='text-white p-5'>
        <div className='text-8xl ml-10'>
        <h1>CONTACT US</h1>
        </div>
        <div className='flex mt-10'>
            <div className='flex flex-1 flex-col gap-5 p-10'>
               <h1 className='text-2xl'>What to Discuss your Project?</h1>
                <div>
                <form className=' flex flex-col gap-5'>
                <div>
                    <input className='bg-transparent outline-none' placeholder='Full name' type="text" />
                    
                    </div>
                    <span className='w-[400px] h-[1px] bg-slate-300'></span>
              
                <div>
                    <input className=' bg-transparent outline-none' placeholder='Email' type="text" />
                </div>
                <span className='w-[400px] h-[1px] bg-slate-300'></span>
                <div className='flex gap-5' >
              <h1>UI/UX</h1>
                <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
               
                <div className='ml-[50%]'>
                    <button>
                     <img src={sendd} />
                    </button>
                </div>
            </form>
                </div>
            </div>

            <div className=' flex flex-1 flex-col gap-5 p-10'>
               <h1 className='text-2xl'>LOCATION</h1>
               <h1>T.T nagar , england</h1>
               <h1>PHONE</h1>
               <h1>656 5435 252</h1>
            </div>

            <div className=' flex flex-1 flex-col gap-5 p-10'>
            <h1 className='text-2xl'>EMAIL</h1>
            <h1>johnwalker@gmail.com</h1>
            <h1 className='text-2xl'>SOCIAL</h1>
            <div className='flex gap-4'>
               <Twitter/>
               <Instagram/>
               <Facebook/>
            </div>
         </div>
        </div>
        <div>
        3
        </div>
        </div>
  )
}

export default Content5

