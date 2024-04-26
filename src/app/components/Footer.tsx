import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-16 mt-8 bg-[#344955]'
        
    >
      <div className='h-full bg-[#344955] flex items-center justify-between max-w-[1000px] px-2 mx-auto'>
          <div className='text-white text-sm ml-3'>
              <p>&copy;2024 PropertyINC</p>
          </div>

          <div className='ml-4 flex text-white text-2xl gap-2'>
            <FaFacebook/> <FaTwitter/> <FaInstagram/>
          </div>
      </div>  
    </div>
  )
}

export default Footer