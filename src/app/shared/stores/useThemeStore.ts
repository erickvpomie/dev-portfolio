import { create } from 'zustand'
import { THEME_TYPES } from '../constants'

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES

interface IThemeStore {
	theme: string
	toggleTheme: () => void
}

const isDark = matchMedia('(prefers-color-scheme: dark)').matches

export const useThemeStore = create<IThemeStore>(set => ({
	theme: localStorage.getItem('theme') || (isDark ? THEME_DARK : THEME_LIGHT),
	toggleTheme: () =>
		set(state => ({
			theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
		})),
}))
