import { THEME_TYPES } from '../constants'
export const applyThemePreference = (theme: string): void => {
	localStorage.setItem('theme', theme)
	const { THEME_DARK, THEME_LIGHT } = THEME_TYPES
	const root = window.document.documentElement
	const isDark = theme === THEME_DARK
	root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK)
	root.classList.add(theme)
	root.style.setProperty('color-scheme', theme)
}
