import { useEffect, useState } from 'react'
import Home from './pages/home'
import '../app/theme/styles/global.css'
import { applyThemePreference } from './shared/utils/theme-utils.ts'
import { useThemeStore } from './shared/stores/useThemeStore.ts'
import 'animate.css'

function App() {
	const theme = useThemeStore(state => state.theme)
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setIsLoading(true)
		applyThemePreference(theme)
		setIsLoading(false)
	}, [theme])
	return <>{!isLoading ? <Home /> : null}</>
}

export default App
