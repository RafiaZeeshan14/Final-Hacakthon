import React from "react";

const DropdownInput = ({ label, id, options ,  width, 
  height, onChange, onBlur, value,name }) => {
  return (
    <div>  
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <select
          id={id}
          name={name}
          style={{
            width: width ? width : '100%',
            height: height ? height : '40px'
          }}
          className="border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 block  p-2.5"
          onChange={onChange}
        onBlur={onBlur}
        value={value}
        >
          {options.map((option , index) => (
            <option  key={index} value={option}>{option}</option>
          ))}
        </select>
      
    </div>
  );
};

export default DropdownInput;