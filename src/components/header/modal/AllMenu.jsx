//@ts-nocheck

import React, { useState } from 'react'
import ButtonMenu from '../../../constants/ButtonMenu'
import { infoFilter } from '../../../constants/NavLinks'
import { style } from '../../../constants/style'

const AllMenu = () => {
	const [action, setAction] = useState('All')
	return (
		<div
			className={`w-[255px] h-[166px] rounded-[10px] bg-[#FFFFFF] mt-[24px] ${style.flexCenter} ${style.borderRed}`}
		>
			<div
				className={`w-[181px] h-[118px] flex flex-wrap gap-2 ${style.borderRed}`}
			>
				{infoFilter.map(item => (
					<ButtonMenu
						key={item.id}
						style={`${action === item.id ? 'bg-blue-600 text-white' : ''}`}
						click={() => {
							setAction(item.id)
						}}
					>
						{item.title}
					</ButtonMenu>
				))}
			</div>
		</div>
	)
}

export default AllMenu
