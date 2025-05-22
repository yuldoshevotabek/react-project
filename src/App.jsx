//@ts-nocheck

import { useState } from 'react'
import { AddFedback, Header, HeaderLayaut, InfoPage } from './components'
import { style } from './constants/style'

const App = () => {
	const [addFedback, setAddFedback] = useState(false)
	const [data, setData] = useState([])
	const [counter, setCounter] = useState(0)
	return (
		<div className={`${style.container} bg-[#F7F8FD] relative`}>
			<HeaderLayaut />
			<div>
				<Header setAddFedback={setAddFedback} counter={counter} />
				<InfoPage setAddFedback={setAddFedback} data={data} />
			</div>
			{addFedback ? (
				<AddFedback
					setAddFedback={setAddFedback}
					setData={setData}
					data={data}
					setCounter={setCounter}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default App
