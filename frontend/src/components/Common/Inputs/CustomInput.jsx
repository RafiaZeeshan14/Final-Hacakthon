import React from 'react';

const CustomInput = ({
  id,
  name,
  label,
  type ,
  value,
  onChange,
  disabled,
  onFocus,
  ...rest
}) => {

  return (
    <div className="relative my-6">
      <input
        id={id}
        type={type ? type : "text"}
        name={name}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={onFocus}
        className="relative w-full h-10 px-4 py-5 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-[#88C343] text-slate-500 autofill:bg-white focus:border-[#73a53a] focus:outline-none"
        {...rest}
      />
      <label
        htmlFor={id}
        className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#285192]"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
