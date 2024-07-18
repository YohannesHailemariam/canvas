import React from 'react'
import Button from '../components/Button'
import { FaRedo } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";




const ColOne = () => {
  return (
    <div className='border shadow-sm rounded-3xl w-fit py-8 px-8'>
        <div className='mb-3'><Button icon={<FaUndo />} text={'UNDO'}/></div>
        <Button icon={<FaRedo />} text={'REDO'}/>
    </div>
  )
}

export default ColOne