import ButtonAdd from '../../constants/ButtonAdd'
import { style } from '../../constants/style'

const InfoPage = () => {
	return (
		<div
			className={`w-[825px] h-[600px] ml-[30px] bg-[#FFFFFF] mt-[24px] mb-[129px] rounded-[10px] ${style.borderRed} ${style.flexCenter}`}
		>
			<div className={` w-[410px] h-[379px] flex flex-col items-center`}>
				<img src='/infoImg.png' alt='infoImg' className='w-[129px] h-[136px]' />
				<div className='text-center mt-[53px]'>
					<h2 className='font-[700] text-[#3A4374] text-[24px] leading-[100%]'>
						There is no feedback yet.
					</h2>
					<p className='font-normal text-[#647196] text-[16px] leading-[100%] mt-[16px]'>
						Got a suggestion? Found a bug that needs to be squashed? We love
						hearing about new ideas to improve our app.
					</p>
					<ButtonAdd style={'m-auto mt-[48px]'}>+ Add Feedback</ButtonAdd>
				</div>
			</div>
		</div>
	)
}

export default InfoPage
