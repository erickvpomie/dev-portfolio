import { create } from 'zustand'

interface ITranslateStore {
	lang: string
	setLang: (lang: string) => void
	showTranslateToggle: boolean
	setShowTranslateToggle: (showToggle: boolean) => void
}

export const useTranslateStore = create<ITranslateStore>(set => ({
	lang: localStorage.getItem('lang') || 'en',
	setLang: (lang: string) => set(() => ({ lang })),
	showTranslateToggle: false,
	setShowTranslateToggle: (showToggle: boolean) =>
		set(() => ({ showTranslateToggle: showToggle })),
}))
