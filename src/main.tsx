import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18n.ts'
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
	'pk.eyJ1IjoiZXJpY2t2cG9taWUiLCJhIjoiY2xyNm44bDh4MmI1azJpcWlrMHJhMGxmdCJ9.EjSK-XJZadDVkLmgHDJM4w'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
)
