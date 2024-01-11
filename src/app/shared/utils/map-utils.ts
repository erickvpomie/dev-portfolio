import { Map } from 'mapbox-gl'
import { useThemeStore } from '../stores/useThemeStore.ts'
import { THEME_TYPES } from '../constants'

export const mapGenerator = () => {
	const { THEME_LIGHT } = THEME_TYPES
	const theme = useThemeStore.getState().theme
	new Map({
		container: 'map',
		style:
			theme === THEME_LIGHT
				? 'mapbox://styles/mapbox/streets-v12'
				: 'mapbox://styles/mapbox/dark-v11',
		center: [-96.9391, 18.869],
		zoom: 5,
		dragPan: false,
		scrollZoom: false,
		attributionControl: false,
		boxZoom: false,
		doubleClickZoom: false,
		touchZoomRotate: false,
		antialias: true,
	})
}
