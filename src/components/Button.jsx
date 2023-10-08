import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`text-primary outline-none  py-4 px-6 
                      bg-blue-gradient font-poppins font-medium 
                      text-[18px] ${styles} rounded-[10px]`}>
        Get Started
    </button>
  )
}

export default Button