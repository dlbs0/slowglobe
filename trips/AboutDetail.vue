<template>
  <div class="attribution">
    <PostageStamp :image="headshotImage"></PostageStamp>
    <br />
    <br />
    <div>
      The Adventures of
      <div class="name">Insert Name Here</div>
    </div>
    <br />
    <br />
    SlowGlobe is a travel blogging tool, find out more at
    <a href="https://github.com/SlowGlobe/slowglobeTemplate" target="_blank"
      >github.com/SlowGlobe/slowglobeTemplate</a
    >
    <br />
    <br />
    You can customise this page in the <em>trips/AboutDetail.vue</em> file.
    <br />
    <br />
    <div>
      Map by&nbsp;
      <a
        class="mapboxgl-ctrl-logo"
        style="display: inline-block; vertical-align: -0.125em"
        target="_blank"
        rel="noopener nofollow"
        href="https://www.mapbox.com/"
        aria-label="Mapbox homepage"
      ></a>
    </div>
    <br />
    Written with Vue, Vite, Typescript, using the Mapbox, Turf, VueUse, LightGallery and
    vite-imagetools libraries.
  </div>
</template>

<style scoped>
.attribution {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2em;
  /* padding-top: 6em; */
  text-align: center;
  /* background-color: white; */
  max-width: 50em;
  a {
    color: var(--primary);
  }
}

.name {
  color: var(--primary);
  font-family: 'Libre Caslon Text', serif;
  font-weight: 600;
  font-size: 2em;
}
</style>
<script setup lang="ts">
import PostageStamp from '@/components/PostageStamp.vue'
import headshotImage from './Portrait_Placeholder_Square.png'
</script>
