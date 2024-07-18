import React from 'react';

export const DropDown = ({ selectedOption, arrayOfOptionItems }) => {
  return (
    <div>
      <select className=' border cursor-pointer rounded-lg shadow-lg'>
        <option disabled selected>{selectedOption}</option>
        {arrayOfOptionItems.map((data, index) => (
          <option key={index}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}
