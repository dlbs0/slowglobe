<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGText from '@/components/SGText.vue'
</script>

<template>
  <DetailView>
    <SGHeader>First Chair, Last Call</SGHeader>
    <SGText>
      <p><i>"First chair, last call"</i></p>
      <!-- <aside><br /><i>"First chair, last call"</i><br /><br /></aside> -->
      <p>
        The yellow embroidery on the side of my new (second-hand) ski pants embodied the attitude
        today.
      </p>
      <p>
        A ski trip to Vemdalen planned of the back of three days of solid snow, delayed by a red
        road warning that littered the roads with stuck trucks.
      </p>
      <p>
        Out on the slopes for a crisp morning, sunny, no wind, a pleasant -10C. Soft carvable snow
        on the groomers, and deep drifts of powder off piste. Carl and I made an early descent of
        some closed runs with excellent snow, keeping us on our toes dodging the deep drifts.
      </p>
      <p>
        The classic Swedish winter lunch, tunnbröd with beetroot salad and meatballs in the
        värmestuga. An intensive afternoon going fast, finding new routes, and crisscrossing through
        the trees. Powder deep enough that you could sink in to your knees.
      </p>
      <p>
        Our first Swedish after ski, which turned out to be a live cover band dressed as if they had
        also just come off the ski slopes, though maybe in a more fashion conscious parallel
        universe.
      </p>
      <p>
        Dinner and drinks back at the cabin; the Swedes trying to convince us of the Scandinavian
        origins of Mexican food.
      </p>
      <p>
        An aurora spotting, the rush for coats. Beating a path to dark sky, then lying in the snow
        watching the pulsing lights up above. The biggest meteor I've seen shot through the sky
        while we were lying there, separating into two distinct pieces which continued burning up
        for several seconds.
      </p>
      <p>What a day, what a place. The Swedes have a word for it: <i>smultronställen</i>.</p>
    </SGText>
    <SGGallery
      :list="[
        '20260110_103414.jpg',
        'IMG_7106.jpg',
        'IMG_7120.jpg',
        {
          img: 'o_BE856E63-D4FE-435F-A883-877A48ABC4EB Copy.m4v',
          caption: 'We didn\'t all look as cool as Carl on the bumps'
        },
        'IMG_4666.jpg',
        'IMG_4670.jpg',
        '20260110_151118 (2).jpg',
        '20260110_151035.jpg',
        'IMG_7136.jpg',
        'IMG_7152.jpg',
        '20260110_151106.jpg',
        'IMG_4692.jpg',
        {
          img: 'IMG_4698.jpg',
          caption:
            'Hard to tell, but this is me and Paula at the end of the not particularly straight path we made to see the horizon.'
        },
        'IMG_4693.jpg',
        'IMG_4689.jpg'
      ]"
    />
  </DetailView>
</template>
