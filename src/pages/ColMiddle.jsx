import React, { useState } from 'react';
import { DropDown } from '../components/DropDown';
import Button from '../components/Button';
import { FaRedo } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

const ColMiddle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedFontSize, setSelectedFontSize] = useState('text-base');
    const [selectedColor, setSelectedColor] = useState('text-balck');

    const toggleVisibility = () => {
        setIsVisible(true);
    };

    const handleFontSizeChange = (event) => {
        const selectedSize = event.target.value;
        const sizeMap = {
            '16': 'text-base',
            '20': 'text-lg',
        };
        setSelectedFontSize(sizeMap[selectedSize]);
    };


    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        const colorMap = {
            'black': 'text-black',
            'red': 'text-red-600',
        };
        setSelectedColor(colorMap[selectedColor])
    }

    return (
        <div>
            <div className='border shadow-md rounded-3xl ml-[30px] mt-[10px] w-fit py-8 px-8'>
                <div className='mb-3'>
                    <Button icon={<FaUndo />} text={'UNDO'} />
                </div>
                <Button icon={<FaRedo />} text={'REDO'} />
            </div>
            <div className='border w-[950px] text-white shadow-md rounded-lg h-[700px] overflow-auto mt-[-150px] ml-[225px]'>
                <p className='invisible'>dhk</p>
            </div>
            <div className='border shadow-md rounded-3xl w-fit py-8 px-8 mt-[-700px] ml-[1200px]'>
                <div className='mb-8'>
                    <h2 className='mb-1 font-medium'>Font</h2>
                    <DropDown selectedOption={'Poppins'} arrayOfOptionItems={[{ name: 'Arial' }, { name: 'Poppins' }]} />
                </div>
                <div className='grid grid-cols-2 mb-8'>
                    <div>
                        <h2 className='mb-1 font-medium'>Size</h2>
                        <select className='border cursor-pointer rounded-lg shadow-lg' onChange={handleFontSizeChange}>
                            <option value="16" selected>16</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='mb-1 font-medium'>Color</h2>
                        <select className='border cursor-pointer rounded-lg shadow-lg' onChange={handleColorChange}> 
                            <option value="black" selected>Black</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                </div>
                <Button text={'ADD TEXT'} onClick={toggleVisibility} />
            </div>
            <input type='text' className={`ml-[600px] ${selectedColor} ${selectedFontSize} ${isVisible ? 'visible' : 'invisible'} border outline-none border-black border-dashed`} />
        </div>
    );
}

export default ColMiddle;
