import type { Trip } from '@/functions/trips'
import imgUrl from '@/assets/images/other/20240922_172726-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const tickingOffATrekInSwitzerland: Trip = {
  id: 'tickingOffATrekInSwitzerland',
  name: 'Ticking off a trek in Switzerland',
  headerImage: imgUrl,
  date: '2025-05-16',
  locationText: 'Grindelwald, Switzerland',
  geography: {
    overview: {
      center: [8.037540815260172, 46.62423916159332],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
