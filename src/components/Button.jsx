import React from 'react'
import { CiUndo } from "react-icons/ci";



const Button = ({icon,text}) => {
  return (
    <div className=' w-fit py-2 rounded-3xl shadow-md px-5 flex flex-row border'>
        <div className='mr-[5px]'>{icon}</div>
        <div className='mt-[-4px]'>{text}</div>       
    </div>
  )
}

export default Button