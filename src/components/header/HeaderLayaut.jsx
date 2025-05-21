//@ts-nocheck

import React from 'react'
import { AllMenu, Mentor, RoadMap } from '../../components'
import { style } from '../../constants/style'

const HeaderLayaut = () => {
	return (
		<div className={`w-[255px] h-[529px] mt-[94px] ${style.borderRed}`}>
			<Mentor />
			<AllMenu />
			<RoadMap />
		</div>
	)
}

export default HeaderLayaut
