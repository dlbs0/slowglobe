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
    <SGHeader>Flytfest</SGHeader>
    <SGText>
      <p>
        It was the one year anniversary of Lisa moving into her new apartment, which of course meant
        that we needed to float down the river.
      </p>
      <p>
        It's a pun-based event; the Swedish word for moving in and floating are one letter apart.
        Last year, when Lisa had moved in, she'd celebrated by getting a group of people together
        and spending the afternoon floating down the river, and this year we were invited to join
        the second incarnation.
      </p>
      <p>
        We'd had a lot of talk beforehand about constructing a raft, but with a looming deadline and
        lack of suitably buoyant materials, I was sent to Ahlens Outlet, home of cheap sunglasses,
        XXL sizes of clothes and inflatable pool toys. One conference call later, I was leaving with
        a large inflatable swan. The plan was to combine it with two SUPs and an inflatable mattress
        to create a 6 person raft.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: '526765929_794706329647136_5901037081071208026_n.jpg',
          caption:
            'Ebba\'s beautiful meeting minutes from the conference call which made us feel much better for bailing on the initial raft plan'
        }
      ]"
    />
    <SGGallery
      :list="[
        {
          img: '523329790_24789090800683403_4100209465327109107_n.jpg',
          caption: 'Lisa\'s map for the day, beautifully designed but lacking a compass rose'
        }
      ]"
    />
    <SGText>
      <p>The morning of the Flyfest arrived.</p>
      <p>
        As Australians, it is our duty to be slightly late to well organised Swedish events.
        Unfortunately, we hadn't banked on getting a bit lost, then getting a bit lost again, and so
        by the time we arrived at the starting location we had to rush to inflate all the components
        of our creation.
      </p>
      <p>
        Picnic packed, raft inflated, light headed, and hot, we joined the end of the queue for the
        water, and then finally we were away.
      </p>
    </SGText>
    <SGGallery
      :list="[
        '1_dan_and_wilma_IMG_5317.jpg',
        '2_the_floatilla_IMG_5340.jpg',
        '2_the_raft_IMG_5320.jpg',
        'o_3_carls_toe_drink_IMG_5327.m4v'
      ]"
    />
    <SGText>
      <p>
        The weather was excellent, the sun out, but not too hot on the water. Our raft held up well,
        making it safely through the small rapids intact, though our central table was a little to
        wet to be a safe place to put drinks. We ended up being the only ones with effective
        paddles, leaving us the responsibility of steering the long group of floating people and
        things away from the becalmed areas of the river.
      </p>
      <p>
        We stopped midway at a very steep beach, where we scrambled up the sand to eat a late lunch.
        Despite Carl betraying his own team in the waterfights on the way, he still managed to
        receive a third of a prosciutto slice.
      </p>
      <p>
        All in all there was swimming, frisbees, water fights, bubbles (of the drinkable variety)
        and bubbles (of the certainly <em>not</em> drinkable variety) and it was an exceptionally
        pleasant way to float down a river.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGGallery
      :add-photos-to-map="true"
      :list="[
        'bubbles_and_fabian_IMG_5338.jpg',
        'o_bubbles_delete_maybe_IMG_5355.m4v',
        'frisbee_IMG_5384.jpg',
        'happy_dan_IMG_5351.jpg',
        {
          img: 'o_beaver.m4v',
          coords: [17.352049816493974, 62.27146043251253],
          caption: 'Beaver sighting'
        }
      ]"
    />
    <SGText>
      <p>
        An honourable mention must be given to a very exciting beaver sighting (marked on map). It
        was made even more special when we learnt it was also the first beaver sighting of most of
        the Swedes we were with.
      </p>
    </SGText>
  </DetailView>
</template>
