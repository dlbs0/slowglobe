import type { Trip } from '@/functions/trips'
import imgUrl from './images/20260709_135416-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const norway2026: Trip = {
  id: 'norway2026',
  name: 'Nor-Way that will take 5 hours',
  headerImage: imgUrl,
  date: '2026-07-06',
  locationText: 'Trøndelag, Norway',
  geography: {
    overview: {
      center: [10.449139940741247, 61.11032252106571],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
