//@ts-nocheck

import React from 'react'
import ButtonMenu from '../../../constants/ButtonMenu'
import { style } from '../../../constants/style'

const AllMenu = () => {
	return (
		<div
			className={`w-[255px] h-[166px] rounded-[10px] bg-[#FFFFFF] mt-[24px] ${style.flexCenter} ${style.borderRed}`}
		>
			<div
				className={`w-[181px] h-[118px] flex flex-wrap gap-2 ${style.borderRed}`}
			>
				<ButtonMenu>All</ButtonMenu>
				<ButtonMenu>UI</ButtonMenu>
				<ButtonMenu>UX</ButtonMenu>
				<ButtonMenu>Enhancement</ButtonMenu>
				<ButtonMenu>Bug</ButtonMenu>
				<ButtonMenu>Feature</ButtonMenu>
			</div>
		</div>
	)
}

export default AllMenu
