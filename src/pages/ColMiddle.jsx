import React, { useState } from 'react';
import Button from '../components/Button';
import { FaRedo } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

const ColMiddle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedFontSize, setSelectedFontSize] = useState('text-base');
    const [selectedColor, setSelectedColor] = useState('text-black');
    const [selectedStyle, setSelectedStyle] = useState('font-abc');
    const [text, setText] = useState('');

    const [stateHistory, setStateHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const saveState = (overrides = {}) => {
        setStateHistory(prev => [
            ...prev, 
            { selectedFontSize, selectedColor, selectedStyle, isVisible, text, ...overrides }
        ]);
        setRedoStack([]);
    };

    const toggleVisibility = () => {
        saveState({ text: '' });  // Save state with empty text
        setText('');  // Clear the text input
        setIsVisible(true);
    };

    const handleFontSizeChange = (event) => {
        saveState();
        const selectedSize = event.target.value;
        const sizeMap = {
            '16': 'text-base',
            '20': 'text-lg',
        };
        setSelectedFontSize(sizeMap[selectedSize]);
    };

    const handleColorChange = (event) => {
        saveState();
        const selectedColor = event.target.value;
        const colorMap = {
            'black': 'text-black',
            'red': 'text-red-600',
        };
        setSelectedColor(colorMap[selectedColor]);
    };

    const handleFontStyleChange = (event) => {
        saveState();
        const selectedStyle = event.target.value;
        const styleMap = {
            'poppins': 'font-abc',
            'nunito': 'font-def',
        };
        setSelectedStyle(styleMap[selectedStyle]);
    };

    const handleTextChange = (event) => {
        saveState({ text: event.target.value });
        setText(event.target.value);
    };

    const undo = () => {
        if (stateHistory.length > 0) {
            const previousState = stateHistory[stateHistory.length - 1];
            setRedoStack(prev => [...prev, { selectedFontSize, selectedColor, selectedStyle, isVisible, text }]);
            setStateHistory(stateHistory.slice(0, -1));
            setSelectedFontSize(previousState.selectedFontSize);
            setSelectedColor(previousState.selectedColor);
            setSelectedStyle(previousState.selectedStyle);
            setIsVisible(previousState.isVisible);
            setText(previousState.text);
        }
    };

    const redo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack[redoStack.length - 1];
            setStateHistory(prev => [...prev, { selectedFontSize, selectedColor, selectedStyle, isVisible, text }]);
            setRedoStack(redoStack.slice(0, -1));
            setSelectedFontSize(nextState.selectedFontSize);
            setSelectedColor(nextState.selectedColor);
            setSelectedStyle(nextState.selectedStyle);
            setIsVisible(nextState.isVisible);
            setText(nextState.text);
        }
    };

    return (
        <div>
            <div className='border  shadow-md rounded-3xl ml-[30px] mt-[10px] w-fit py-8 px-8'>
                <div className='mb-3'>
                    <Button icon={<FaUndo />} text={'UNDO'} onClick={undo} />
                </div>
                <Button icon={<FaRedo />} text={'REDO'} onClick={redo} />
            </div>
            <div className='border w-[950px] shadow-md rounded-lg h-[700px] overflow-auto mt-[-150px] ml-[225px]'>
                <p className='invisible'>dhk</p>
            </div>
            <div className='border shadow-md rounded-3xl w-fit py-8 px-8 mt-[-700px] ml-[1200px]'>
                <div className='mb-8'>
                    <h2 className='mb-1 font-medium'>Font</h2>
                    <select className='border cursor-pointer rounded-lg shadow-lg' onChange={handleFontStyleChange}>
                        <option value="poppins" selected>Poppins</option>
                        <option value="nunito">Nunito</option>
                    </select>
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
            <input 
                type='text' 
                value={text} 
                onChange={handleTextChange} 
                className={`ml-[600px] ${selectedStyle} ${selectedColor} ${selectedFontSize} ${isVisible ? 'visible' : 'invisible'} border outline-none border-black border-dashed`} 
            />
        </div>
    );
};

export default ColMiddle;
