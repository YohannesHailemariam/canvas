import React from 'react'
import { CiUndo } from "react-icons/ci";



const Button = ({icon,text}) => {
  return (
    <div className=' select-none bg-black cursor-pointer hover:-translate-y-1 active:translate-y-1 transition duration-90 w-fit py-2 rounded-3xl shadow-md px-5 flex flex-row border'>
        <div className='mr-[5px] text-white'>{icon}</div>
        <div className='mt-[-4px] font-medium text-white'>{text}</div>       
    </div>
  )
}

export default Button