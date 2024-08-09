import React from 'react';

const CustomDropdown = ({ id, name, label, options, required, ...rest }) => {
  return (
    <div className="relative my-6 ">
      <select
        id={id}
        name={name}
        required={required}
        className="relative w-full h-10 px-4 py-5 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-[#88C343] focus:border-[#73a53a]  text-slate-500 autofill:bg-white focus:focus-visible:outline-none"
        {...rest}
      >
        <option value="" selected disabled hidden></option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all  peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#285192]   "
      >
        {label}
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default CustomDropdown;