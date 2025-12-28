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
        remarkable event despite their excellent sandwich culture. Lunch complete, we lugged our
        endless quantity of gear down to the water's edge, picked out our canoes and canoe-buddies,
        and set off.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :reveal="1" :fit-only-to-indexes="[0]" />
    <SGText
      ><p>
        Our objective on this first day was to paddle out to our campsite, a very modest distance.
        Our route did however present some difficulties. We very quickly ran into our first
        land-crossing, where we needed to cross a few hundred meters of land between two lakes to
        continue.
      </p>
      <p>
        I was paddling with Anton, and being the organiser of the trip, he had brought a lot of the
        communal gear. This meant our initial attempt of just lifting the canoe, goods and all,
        worked for almost 20 meters, before we saw how much further we had to go.
      </p>
      <p>
        After much struggle and a few trips back and forth, we were all happily back in the water on
        the other side.
      </p>
      <p>For about 5 minutes, when we came to the next (larger) land crossing.</p>
      <p>
        This time, we had ideas about strategy, and each group came up with their own plans. Anton
        and I ended up carrying the canoe on our heads, which was easy to lift, but made avoiding
        the many patches of swampy muddy ground difficult.
      </p>
      <p>
        Finally back in the water again, we enjoyed a longer paddle into our campsite, arriving a
        few minutes before the rain set in. Our campsite was a classic Swedish wilderness affair; a
        small wooden hut with a fire pit and a few log benches. The lakes we were paddling through
        were beautiful, flat clear water, with rocky shores dotted with pine trees on either side.
        Most of the lakes were relatively narrow, giving a sense of progress, and letting us see the
        scenery from the water.
      </p>
    </SGText>
    <SGGallery
      :list="[
        '20250905_122545.jpg',
        '20250906_095027.jpg',
        'DSC_0257.jpg',
        '20250906_171332.jpg',
        'DSC_0308.jpg',
        'DSC_0295.jpg'
      ]"
      :small-thumbnails="true"
    />
    <SGText>
      <p>
        Several of us had set their sights on the mountain in the distance, and the next morning, we
        formed a few different parties to explore it. Some decided the best approach was by land,
        running or walking, but I was in the group determined to paddle as far as possible (meaning
        as far as possible without another miserable land-crossing).
      </p>
      <p>
        Our seafaring group set off mid-morning, and it was really nice to get a longer paddle in
        and sink into the rhythm a bit. Eventually, we did reach our landing point, and set off on
        foot, hoping to intersect the path the others were on. Before we did that though, we
        interested the path of a herd of reindeer, which was pretty exciting. They blend in
        perfectly with the landscape until they move (how many can you spot in the photo below?).
      </p>
      <!-- TODO there should be more photos of the reindeer -->
    </SGText>
    <SGGallery :list="['20250906_102141.jpg']" />
    <SGText>
      <p>
        After negotiating around the reindeer, we found the trail and eventually ran into some of
        the others. The trail was rocky and pretty technical, and I had to keep reminding myself to
        look up at the scenery. Either side of the path were lush mossy forests, and so much water.
        Both the lakes on either side, but the countless tiny streams we were stepping over, and the
        boggy pools that made up a good portion of the ground. The trees here weren't just pine and
        spruce, but leafy, and just starting to come into their autumn colors.
      </p></SGText
    >
    <SGGallery
      :list="[
        '20250906_100352.jpg',
        '20250906_105416.jpg',
        'DSC_0369.jpg',
        'DSC_0363.jpg',
        'DSC_0368.jpg',
        '20250906_121049.jpg',
        '20250906_124339.jpg'
      ]"
      :small-thumbnails="false"
    />
    <SGText> <p>Words</p></SGText>
    <SGMapCutout
      :fit-bounds-geometry="geom"
      :reveal="2"
      :fit-only-to-indexes="[1]"
      :pitch="60"
      :satellite="'contours'"
    />
    <SGGallery
      :list="[
        'DSC_0262.jpg',
        'DSC_0293.jpg',
        'DSC_0296.jpg',
        'DSC_0316.jpg',
        'DSC_0328.jpg',
        'DSC_0333.jpg',
        'DSC_0340.jpg',

        '20250906_145133.jpg',
        '20250906_162958.jpg',
        '20250906_171144.jpg'
      ]"
      :small-thumbnails="true"
    />
  </DetailView>
</template>
