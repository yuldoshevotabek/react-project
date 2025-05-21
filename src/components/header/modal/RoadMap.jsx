import React from 'react'
import { style } from '../../../constants/style'

const RoadMap = () => {
	return (
		<div
			className={`w-[255px] mt-[24px] h-[178px] bg-[#FFFFFF] rounded-[10px] flex items-center flex-col ${style.borderRed}`}
		>
			<div
				className={`mt-[19px] w-[207px] h-[26px] ${style.borderRed} ${style.flexBetween}`}
			>
				<h2 className='text-[#3A4374] font-[700] text-[18px] leading-[100%]'>
					Roadmap
				</h2>
				<p className='text-[#4661E6] font-[600] text-[13px] underline'>View</p>
			</div>
			<div
				className={`${style.flexBetween} w-[207px] ${style.borderRed} mt-[24px]`}
			>
				<div className='flex items-center gap-4'>
					<div className='w-2 h-2 bg-[#F49F85] rounded-full'></div>
					<p className='font-normal text-[#647196] text-[16px] leading-[100%]'>
						Planned
					</p>
				</div>
				<span className='text-[#647196] font-[700] text-[16px] leading-[100%]'>
					0
				</span>
			</div>
			<div
				className={`${style.flexBetween} w-[207px] ${style.borderRed} mt-[8px]`}
			>
				<div className='flex items-center gap-4'>
					<div className='w-2 h-2 bg-[#AD1FEA] rounded-full'></div>
					<p className='font-normal text-[#647196] text-[16px] leading-[100%]'>
						Planned
					</p>
				</div>
				<span className='text-[#647196] font-[700] text-[16px] leading-[100%]'>
					0
				</span>
			</div>
			<div
				className={`${style.flexBetween} w-[207px] ${style.borderRed} mt-[8px]`}
			>
				<div className='flex items-center gap-4'>
					<div className='w-2 h-2 bg-[#62BCFA] rounded-full'></div>
					<p className='font-normal text-[#647196] text-[16px] leading-[100%]'>
						Planned
					</p>
				</div>
				<span className='text-[#647196] font-[700] text-[16px] leading-[100%]'>
					0
				</span>
			</div>
		</div>
	)
}

export default RoadMap
