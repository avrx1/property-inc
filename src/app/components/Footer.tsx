import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div
        className='w-full h-16 mt-8 bg-[#344955] flex items-center'
    >
        <div className='text-white text-sm ml-3'>
            <p>&copy;2024 PropertyINC</p>
        </div>
        
    </div>
  )
}

export default Footer