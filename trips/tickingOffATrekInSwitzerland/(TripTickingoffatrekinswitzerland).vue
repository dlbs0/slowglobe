<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGMapFollow from '@/components/SGMapFollow.vue'
const { data: geom } = useTripDetails()

const dayOneGeom = geom.value?.features[4] as Feature<LineString>
</script>

<template>
  <DetailView>
    <SGHeader>Ticking off a trek in Switzerland</SGHeader>
    <SGText>
      Words here.
      <br />
      <br />
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :satellite="'contours'" />
    <SGText>Hello there</SGText>
    <SGMapFollow
      :geometry="dayOneGeom"
      :follow="true"
      :use-time="false"
      :show-time="true"
      :follow-pitch="70"
      :overview="false"
      :satellite="true"
      :follow-zoom="12"
      :no-pre-scroll="true"
    />
  </DetailView>
</template>
