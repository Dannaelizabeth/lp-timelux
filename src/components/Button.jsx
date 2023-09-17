import React from 'react'

const Button = ({label,iconArrow, backgroundColor, textColor,borderColor, fullWidth} ) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${
      backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}`: 'bg-blue-oscu text-white border-blue-oscu'
    } rounded-full ${fullWidth && 'w-full'}`}>{label}

    {
      iconArrow && (
        <img
    src={iconArrow}
    alt='iconArrow'
    className='ml-2 rounded-full bg-white w-5 h-5'
    />

      )
    }
    
    </button>
  )
}

export default Button