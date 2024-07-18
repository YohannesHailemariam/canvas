import React from 'react';

export const DropDown = ({ selectedOption, arrayOfOptionItems, onChange }) => {
  return (
    <div>
      <select>
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
