//@ts-nocheck

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import ButtonAdd from '../../constants/ButtonAdd'

const Header = ({ setAddFedback, counter }) => {
	return (
		<div
			className={
				'w-[825px] h-[72px] bg-[#373F68] mt-[94px] rounded-[10px] ml-[30px] flex items-center relative'
			}
		>
			<div className='flex gap-4 items-center ml-[24px]'>
				<div>
					<img src='/logo.svg' alt='logo' />
				</div>
				<div className='flex items-center gap-2'>
					<span className='text-[#FFFFFF] font-[700] text-[18px] leading-[100%]'>
						{counter}
					</span>
					<p className='text-white font-[700] text-[18px] leading-[100%] '>
						Suggestions
					</p>
				</div>
			</div>
			<div className='ml-[38px] flex items-center gap-2 text-[#F2F4FE] w-[220px] font-[700] text-[14px] leading-[100%]'>
				<p>Sort by :</p>
				<Select>
					<SelectTrigger className='w-[140px] border-none outline-none p-0'>
						<SelectValue placeholder='Most Upvotes' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem
							value='light'
							className='hover:text-[#AD1FEA] text-[#647196] font-normal text-[16px]'
						>
							Least Upvotes
						</SelectItem>
						<SelectItem
							value='dark'
							className='hover:text-[#AD1FEA] text-[#647196] font-normal text-[16px]'
						>
							Most Comments
						</SelectItem>
						<SelectItem
							value='system'
							className='hover:text-[#AD1FEA] text-[#647196] font-normal text-[16px]'
						>
							Least Comments
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<ButtonAdd
				style={'absolute right-4'}
				click={() => {
					setAddFedback(true)
				}}
			>
				+ Add Feedback
			</ButtonAdd>
		</div>
	)
}

export default Header
