//@ts-nocheck

import { ArrowUp, MessageCircleMore } from 'lucide-react'
import ButtonAdd from '../../constants/ButtonAdd'
import { style } from '../../constants/style'

const InfoPage = ({ setAddFedback, data }) => {
	return (
		<div
			className={`w-[825px] h-[600px] ml-[30px] ${
				data.length >= 1 ? 'bg-[#F7F8FD]' : 'bg-[#FFFFFF]'
			} mt-[24px] mb-[129px] rounded-[10px]  ${
				data.length >= 1 ? '' : style.flexCenter
			}`}
		>
			{data.length >= 1 ? (
				<div>
					{data.map((item, idx) => (
						<div
							className={`bg-[#FFFFFF] w-[825px] ${
								idx === 0 ? 'mt-0' : 'mt-[20px]'
							} rounded-[10px] h-[151px] cursor-pointer active:scale-95 transition-all duration-300 ${
								style.flexCenter
							}`}
						>
							<div className={`w-[761px] h-[95px] px-[80px] relative`}>
								<div className='bg-[#F2F4FE] rounded-[10px] w-[40px] h-[53px] flex justify-center flex-col items-center hover:bg-[#CFD7FF] cursor-pointer active:bg-[#4661E6] absolute left-0'>
									<ArrowUp />
									<span>112</span>
								</div>
								<div>
									<h3 className='text-[#3A4374] font-[700] text-[18px] leading-[100%]'>
										{item.title}
									</h3>
									<p className='font-normal mt-1 text-[#647196] text-[16px] leading-[100%]'>
										{item.text}
									</p>
									<div className='px-[16px] mt-3 py-[5px] rounded-[10px] bg-[#F2F4FF] inline-block'>
										<p className='text-[#4661E6] text-[13px] font-[600] leading-[100%]'>
											{item.select}
										</p>
									</div>
								</div>
								<div className='absolute right-0 top-[36px] flex w-[44px] gap-2'>
									<MessageCircleMore />
									<span>0</span>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={` w-[410px] h-[379px] flex flex-col items-center`}>
					<img
						src='/infoImg.png'
						alt='infoImg'
						className='w-[129px] h-[136px]'
					/>
					<div className='text-center mt-[53px]'>
						<h2 className='font-[700] text-[#3A4374] text-[24px] leading-[100%]'>
							There is no feedback yet.
						</h2>
						<p className='font-normal text-[#647196] text-[16px] leading-[100%] mt-[16px]'>
							Got a suggestion? Found a bug that needs to be squashed? We love
							hearing about new ideas to improve our app.
						</p>
						<ButtonAdd
							click={() => {
								setAddFedback(true)
							}}
							style={'m-auto mt-[48px]'}
						>
							+ Add Feedback
						</ButtonAdd>
					</div>
				</div>
			)}
		</div>
	)
}

export default InfoPage
