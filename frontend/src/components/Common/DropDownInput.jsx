import React from "react";

const DropdownInput = ({ label, id, options }) => {
  return (
    <div>
      <form class="max-w-sm mx-auto ">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <select
          id={id}
          className="border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 block w-full p-2.5"
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default DropdownInput;