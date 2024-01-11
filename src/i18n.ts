import i18next from 'i18next'
import en from './app/shared/translations/en/global.json'
import es from './app/shared/translations/es/global.json'

i18next.init({
	interpolation: {
		escapeValue: false,
	},
	resources: {
		es: { global: es },
		en: { global: en },
	},
	lng: 'en',
})

export default i18next
