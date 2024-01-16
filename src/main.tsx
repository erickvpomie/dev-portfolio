import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
)
