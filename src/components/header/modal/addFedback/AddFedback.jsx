//@ts-nocheck

import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import ButtonAdd from '../../../../constants/ButtonAdd'

const AddFedback = ({ setAddFedback, setData, data, setCounter }) => {
	const [inputVal, setInputVal] = useState('')
	const [selectedVal, setSelectedVal] = useState('Feature')
	const [textArea, setTextArea] = useState('')

	const handlerClick = () => {
		setData([...data, { title: inputVal, select: selectedVal, text: textArea }])
		setAddFedback(false)
		setCounter(prev => prev + 1)
	}

	const handlerInputValue = e => {
		const val = e.target.value
		setInputVal(val)
	}
	const selectedValue = e => {
		const val = e.target.value
		setSelectedVal(val)
	}
	const textAreaValue = e => {
		const val = e.target.value
		setTextArea(val)
	}
	return (
		<div
			className={`absolute w-full h-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg`}
		>
			<div
				className={`absolute w-[540px] h-[745px] left-[50%] top-[50%] translate-[-50%] flex flex-col justify-between bg-[#F7F8FD] `}
			>
				<div>
					<button
						onClick={() => {
							setAddFedback(false)
						}}
						className='flex gap-[7px] items-center cursor-pointer active:scale-95'
					>
						<ArrowLeft />
						<p className='text-[#647196] font-[700] text-[17px] leading-[100%]'>
							Go Back
						</p>
					</button>
				</div>
				<div
					className={`w-full h-[685px] mt-[68px] bg-[#FFFFFF] px-[42px] relative`}
				>
					<img
						src='/plus.svg'
						alt='plus'
						className='w-[56px] h-[56px] absolute -top-[28px] left-[42px]'
					/>
					<h2 className='font-[700] text-[#3A4374] text-[24px] mt-[52px] leading-[100%]'>
						Create New Feedback
					</h2>
					<div className={`h-[106px] mt-[40px] flex flex-col justify-between`}>
						<div className='flex flex-col gap-2 h-[42px]'>
							<p className='text-[#3A4374] font-[700] text-[14px] leading-[100%]'>
								Feedback Title
							</p>
							<p className='text-[#647196] text-[14px] font-normal leading-[100%]'>
								Add a short, descriptive headline
							</p>
						</div>
						<input
							onChange={handlerInputValue}
							type='text'
							className='bg-[#F7F8FD] rounded-[5px] text-[18px] w-[456px] h-[48px] border-0 outline-0 px-3'
						/>
					</div>
					<div
						className={`w-full h-[106px] mt-[24px] flex flex-col justify-between `}
					>
						<div className='h-[42px] flex flex-col gap-2'>
							<p className='text-[#3A4374] font-[700] text-[14px] leading-[100%]'>
								Category
							</p>
							<p className='text-[#647196] font-normal text-[14px] leading-[100%]'>
								Choose a category for your feedback
							</p>
						</div>
						<select
							onChange={selectedValue}
							className='bg-[#F7F8FD] w-full h-[48px] rounded-[5px] border-0 outline-0'
						>
							<option value='Feature'>Feature</option>
							<option value='UI'>UI</option>
							<option value='UX'>UX</option>
							<option value='Enhancement'>Enhancement</option>
							<option value='Bug'>Bug</option>
						</select>
					</div>
					<div
						className={` w-full h-[154px] flex flex-col gap-[16px] mt-[24px]`}
					>
						<div className='h-[42px] flex flex-col gap-2'>
							<p className='text-[#3A4374] font-[700] text-[14px] leading-[100%]'>
								Feedback Detail
							</p>
							<p className='font-normal text-[#647196] text-[14px] leading-[100%]'>
								Include any specific comments on what should be improved, added,
								etc.
							</p>
						</div>
						<textarea
							type='text'
							onChange={textAreaValue}
							className='w-full h-[96px] bg-[#F7F8FD] rounded-[5px] border-0 outline-0 p-3'
						/>
					</div>
					<div className={` flex justify-between  mt-[32px]`}>
						<div></div>
						<div className='flex gap-4'>
							<ButtonAdd
								click={() => {
									setAddFedback(false)
								}}
								style={'bg-blue-900'}
							>
								Cancel
							</ButtonAdd>
							<ButtonAdd click={handlerClick}>Add Feedback</ButtonAdd>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddFedback
