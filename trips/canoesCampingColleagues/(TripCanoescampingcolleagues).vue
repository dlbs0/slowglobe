<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>Canoes, Colleagues & Camping</SGHeader>
    <SGText>
      <!-- Words here. https://demo.itineraries.traveledmap.com/stretchable8 -->
      <p>
        Of course Sweden has work camping trips, and of course I was on it. I guess not everyone is
        keen to go into the wilderness with a bunch of co-workers, but a canoe-camping trip is hard
        to resist.
      </p>
      <p>
        We took Friday off, but still assembled at work early in the morning to load our gear into
        two minivans. Four hours and 300km west later, we arrived at our destination, Lake Rogen,
        right on the edge of the Swedish-Norwegian border. The last "ten minutes" of our trip was on
        some pretty rough roads, and the minivans were not quite able to handle Google's estimates,
        leaving plenty of time for suspense to build.
      </p>
      <p>
        We had lunch at the launch site, outside on a table next to the classic Swedish red houses
        and barns. I think this was the first time I had seen Swedes eat sandwiches for lunch, a
        remarkable event despite their excellent sandwich culture.
      </p>
      <br />
      <br />
    </SGText>
    <SGGallery
      :list="[
        'DSC_0257.jpg',
        'DSC_0262.jpg',
        'DSC_0293.jpg',
        'DSC_0295.jpg',
        'DSC_0296.jpg',
        'DSC_0308.jpg',
        'DSC_0316.jpg',
        'DSC_0328.jpg',
        'DSC_0333.jpg',
        'DSC_0340.jpg',
        'DSC_0363.jpg',
        'DSC_0368.jpg',
        'DSC_0369.jpg',
        '20250905_122545.jpg',
        '20250906_095027.jpg',
        '20250906_100352.jpg',
        '20250906_102141.jpg',
        '20250906_105416.jpg',
        '20250906_121049.jpg',
        '20250906_124339.jpg',
        '20250906_145133.jpg',
        '20250906_162958.jpg',
        '20250906_171144.jpg',
        '20250906_171332.jpg'
      ]"
      :small-thumbnails="true"
    />
    <SGMapCutout :fit-bounds-geometry="geom" :reveal="1" :fit-only-to-indexes="[0]" />
  </DetailView>
</template>
