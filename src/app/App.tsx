import { useEffect, useState } from 'react'
import Home from './pages/home'
import '../app/theme/styles/global.css'
import { applyThemePreference } from './shared/utils/theme-utils.ts'
import { useThemeStore } from './shared/stores/useThemeStore.ts'
import 'animate.css'
import { useTranslation } from 'react-i18next'
import { useTranslateStore } from './shared/stores/useTranslateStore.ts'

function App() {
	const lang = useTranslateStore(state => state.lang)
	const theme = useThemeStore(state => state.theme)
	const { i18n } = useTranslation('global')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		i18n.changeLanguage(lang)
	}, [lang])

	useEffect(() => {
		setIsLoading(true)
		applyThemePreference(theme)
		setIsLoading(false)
	}, [theme])

	return <>{!isLoading && lang ? <Home /> : null}</>
}

export default App
