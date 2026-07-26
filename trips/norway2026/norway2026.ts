import type { Trip } from '@/functions/trips'
import imgUrl from '@/assets/images/other/20240922_172726-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const norway2026: Trip = {
  id: 'norway2026',
  name: "Nor-Way You're Eating That Whole Brunost Alone",
  headerImage: imgUrl,
  date: '2026-07-06',
  locationText: 'Trøndelag, Norway',
  geography: {
    overview: {
      center: [9.22486504684366, 62.015774840322706],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
