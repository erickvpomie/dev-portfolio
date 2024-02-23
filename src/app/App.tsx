import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'animate.css'
import '@/app/theme/styles/global.css'
import Home from '@/app/pages/home'
import { applyThemePreference } from '@/app/shared/utils/theme-utils.ts'
import { useThemeStore } from '@/app/shared/stores/useThemeStore.ts'
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
