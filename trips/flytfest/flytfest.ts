import type { Trip } from '@/functions/trips'
import imgUrl from './images/IMG_5349 - frame at 0m0s-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const flytfest: Trip = {
  id: 'flytfest',
  name: 'Flytfest',
  headerImage: imgUrl,
  date: '2025-08-10',
  locationText: 'Ljungan River, Sweden',
  geography: {
    overview: {
      center: [17.336986953206065, 62.28114369430685],
      tracks: overviewGeo,
      zoom: 9.5
    },
    detail: detailGeo
  }
}
