import React from 'react'
import { DropDown } from '../components/DropDown'
import Button from '../components/Button'


const ColMiddle = () => {
    const a = { name: "Poppins" }
    const b = { name: "Arial"}
  return (
    <div>
        <div className='border w-[950px] text-white shadow-md rounded-lg h-[700px] overflow-auto mt-[-150px] ml-[225px]'>dhk</div>
        <div className='border shadow-md rounded-3xl ml-[30px] mt-[20px] w-fit py-8 px-8 mt-[-700px] ml-[1200px]'>
           <div className='mb-8'>
                <h2 className='mb-1 font-medium'>Font</h2>
                <DropDown selectedOption={'Poppins'} arrayOfOptionItems={[{name: 'Arial'},{name: 'Poppins'}]} />
           </div>
           <div className='grid grid-cols-2 mb-8'>
                <div>
                    <h2 className='mb-1 font-medium'>Size</h2>
                    <DropDown selectedOption={'16'} arrayOfOptionItems={[{name: '16'},{name: '20'}]} />
                </div>
                <div>
                <h2 className='mb-1 font-medium'>Color</h2>
                <DropDown selectedOption={'Black'} arrayOfOptionItems={[{name: 'Black'},{name: 'White'}]} />
                </div>
           </div>
           <Button text={'ADD TEXT'}/>
        </div>
    </div>
  )
}

export default ColMiddle