import React from 'react'

const ButtonMenu = ({ children, style, click }) => {
	return (
		<button
			className={`hover:bg-[#4661E6] hover:text-white bg-[#F2F4FF] text-[#4661E6] rounded-[10px] py-[16px] px-[6px] h-[30px] flex items-center cursor-pointer active:scale-95 ${style}`}
			onClick={click}
		>
			<p className='font-[600] text-[13px] leading-[100%]'>{children}</p>
		</button>
	)
}

export default ButtonMenu
