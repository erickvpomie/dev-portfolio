import { useTranslateStore } from '../stores/useTranslateStore.ts'

export const switchLanguage = (lang: string) => {
	const lang_ = useTranslateStore.getState().lang
	const setLang = useTranslateStore.getState().setLang
	if (lang !== lang_) {
		setLang(lang)
		localStorage.setItem('lang', lang)
	}
}
