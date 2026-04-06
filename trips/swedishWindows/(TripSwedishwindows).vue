<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGText from '@/components/SGText.vue'
// import SGPhoto from '@/components/SGPhoto.vue'
</script>

<template>
  <DetailView>
    <SGHeader>Year in Windows</SGHeader>
    <SGText>
      <p>
        We've been in Sweden for a full year now, and have been documenting the changing seasons
        through our upstairs window. Here's a bunch of our favorite shots, in no particular order.
      </p>
      <SGGallery
        :small-thumbnails="true"
        :list="[
          'Autumn.png',
          'Bluebird.png',
          'Clouds.png',
          'ColourfulSunset.png',
          'Foggy.png',
          'FoggyWinter.png',
          'Orange Sky.png',
          'Orange and Green.png',
          'Summer.png',
          'Sunny.png',
          'SunnyWinter.png',
          'Sunset.png',
          'Winter.png',
          'WinterSunset.png'
        ]"
      />
    </SGText>
    <!-- <SGPhoto
      :list="[
        'Autumn.png',
        'Bluebird.png',
        'Clouds.png',
        'ColourfulSunset.png',
        'Foggy.png',
        'FoggyWinter.png',
        'Orange Sky.png',
        'Orange and Green.png',
        'Summer.png',
        'Sunny.png',
        'SunnyWinter.png',
        'Sunset.png',
        'Winter.png',
        'WinterSunset.png'
      ]"
      altText="A window with autumn leaves outside."
      caption="Autumn"
    /> -->
  </DetailView>
</template>
