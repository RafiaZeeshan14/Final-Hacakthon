import React from 'react';

const Input = ({ label, placeholder, id, type = "text", showForgotPassword = false }) => {
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
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
          placeholder={placeholder}
          id={id}
        />
      </div>
    </div>
  );
};

export default Input;