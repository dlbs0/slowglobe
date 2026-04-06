import type { Trip } from '@/functions/trips'
import imgUrl from './images/20260403_135536-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const goingCoastal: Trip = {
  id: 'goingCoastal',
  name: 'Going Coastal',
  headerImage: imgUrl,
  date: '2026-03-03',
  locationText: 'Kustleden, Sweden',
  geography: {
    overview: {
      center: [17.33859425923788, 61.95819554936449],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
