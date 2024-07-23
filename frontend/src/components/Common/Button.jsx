import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Button = ({type , text , }) => {
  return (
    <div>
    <button
      type={type}
      className="inline-flex w-full items-center justify-center rounded-md bg-[#285192] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#285192]/90"
    >
      {text} <FaArrowRight className="ml-2" size={16} />
    </button>
  </div>
  )
}

export default Button