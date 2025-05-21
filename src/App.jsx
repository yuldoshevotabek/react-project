import { Header, HeaderLayaut, InfoPage } from './components'
import { style } from './constants/style'

const App = () => {
	return (
		<div className={`${style.container} bg-[#F7F8FD]`}>
			<HeaderLayaut />
			<div>
				<Header />
				<InfoPage />
			</div>
		</div>
	)
}

export default App
