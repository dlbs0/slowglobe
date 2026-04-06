import type { Trip } from '@/functions/trips'
import imgUrl from './images/IMG_6268.jpg?w=600&gallery'

export const swedishWindows: Trip = {
  id: 'swedishWindows',
  name: 'Year in Windows',
  headerImage: imgUrl,
  date: '2026-01-18',
  locationText: 'Sundsvall, Sweden',
  geography: {
    overview: {
      center: [17.26490211056887, 62.40583586536414],
      zoom: 8
    }
  }
}
