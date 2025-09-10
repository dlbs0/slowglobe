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
      Words here.
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
