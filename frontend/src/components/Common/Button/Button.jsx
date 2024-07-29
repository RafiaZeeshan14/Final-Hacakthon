import { FaArrowRight } from "react-icons/fa";

const Button = ({ type, text, variant }) => {
  const getButtonStyles = (variant) => {
    switch (variant) {
      case 'primary':
        return "inline-flex w-full items-center justify-center rounded-md bg-[#285192] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#285192]/90";
      case 'gradient':
        return "relative inline-flex items-center justify-center p-[2px] rounded bg-gradient-to-r from-green-500 to-blue-500";
      default:
        return "inline-flex w-full items-center justify-center rounded-md bg-[#285192] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#285192]/90";
    }
  };

  return (
    <div>
      {variant === 'gradient' ? (
        <button type={type} className={getButtonStyles(variant)}>
          <span className="bg-white hover:bg-gray-50 text-[#285192] font-medium rounded px-6 py-3 text-[15px]">
            {text}
          </span>
        </button>
      ) : (
        <button type={type} className={getButtonStyles(variant)}>
          {text} <FaArrowRight className="ml-2" size={16} />
        </button>
      )}
    </div>
  );
};

export default Button;