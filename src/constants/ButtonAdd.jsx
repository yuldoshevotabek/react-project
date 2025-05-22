const ButtonAdd = ({ children, style, click }) => {
	return (
		<button
			className={`bg-[#AD1FEA] px-[25px] rounded-[10px] flex items-center h-[44px] active:scale-95 cursor-pointer transition-all duration-300 ${style}`}
			onClick={click}
		>
			<p className='text-[#F2F4FE] font-[700] text-[14px] leading-[100%] '>
				{children}
			</p>
		</button>
	)
}

export default ButtonAdd
