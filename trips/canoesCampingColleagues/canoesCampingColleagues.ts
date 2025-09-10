import type { Trip } from '@/functions/trips'
import imgUrl from './images/DSC_0363-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const canoesCampingColleagues: Trip = {
  id: 'canoesCampingColleagues',
  name: 'Canoes, Colleagues & Camping',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Rogen, Sweden',
  geography: {
    overview: {
      center: [12.418329457181471, 62.352306204665126],
      tracks: overviewGeo,
      zoom: 8
    },
    detail: detailGeo
  }
}
