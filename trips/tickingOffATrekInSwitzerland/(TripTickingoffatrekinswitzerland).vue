<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGMapFollow from '@/components/SGMapFollow.vue'
import type { Feature, LineString } from 'geojson'
import SpotifyEmbed from '@/components/SpotifyEmbed.vue'
const { data: geom } = useTripDetails()

const dayOneGeom = geom.value?.features[4] as Feature<LineString>
</script>

<template>
  <DetailView>
    <SGHeader>Ticking off a trek in Switzerland</SGHeader>
    <SpotifyEmbed :url="'playlist/3AonEgmTbC1KdNTB1Bk9Op'" :small="false"></SpotifyEmbed>
    <SGText>
      <p>
        Living in Europe has its perks, and one of the big ones is being able to meet up with our
        Australian friends on their Europe trips. We got just such an opportunity this summer;
        learning that Matt, Chloe and Brodie would all be in Europe at the same time we made plans
        to go somewhere together. Being diplomatic about our choice of somewhere, we decided on a
        famously neutral, central location: Switzerland.
      </p>
      <p>
        As with all democratic processes, there was an ulterior motive at play; Matt grew up in
        Switzerland, and we all liked the idea of a tour guide who spoke the language. And so Paula
        and I found ourselves one evening leaving a confusingly ticketed trolleybus and walking up
        the hill in the setting sun towards an apartment belonging to Matt's uncle Tony, who had
        very kindly agreed to let us stay with him for a few nights.
      </p>
      <p>
        We'd flown into Geneva in a largely difficulty-free day of travel, and caught the train
        along the lakeside to Vevey. The track has a view over the water for most of the way, and we
        accidentally sat in first class, all of which was a very pleasant way to start our time in
        Switzerland.
      </p>
      <p></p>
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
