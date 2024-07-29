import React from 'react';

const Input = ({ 
  label, 
  placeholder, 
  id, 
  type = "text", 
  showForgotPassword = false, 
  width, 
  height, 
  disabled = false,
 backgroundColor,
 onChange, onBlur, value,
 name
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {showForgotPassword && (
          <a
            href="#"
            className="text-xs text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        )}
      </div>
      <div className="mt-2">
        <input
          className="flex  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          
          style={{
            width: width ? width : '100%',
            height: height ? height : '40px',
            backgroundColor: backgroundColor,
          }}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </div>
  );
};




export default Input;