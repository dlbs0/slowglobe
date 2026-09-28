<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGText from '@/components/SGText.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapFollow from '@/components/SGMapFollow.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import type { Feature, LineString } from 'geojson'
import SGMapOrbit from '@/components/SGMapOrbit.vue'
import SGDayBreak from '@/components/SGDayBreak.vue'
import { useTripDetails } from '@/functions/loaders'

const { data: flinders } = useTripDetails()

const dayOneGeom = flinders.value?.features[0] as Feature<LineString>
const dayTwoGeom = flinders.value?.features[1] as Feature<LineString>
const dayThreeGeom = flinders.value?.features[2] as Feature<LineString>
const dayFourGeom = flinders.value?.features[3] as Feature<LineString>
</script>

<template>
  <DetailView :reveal="'none'">
    <SGHeader>Hiking the Flinders</SGHeader>

    <SGText
      >As a last hurrah before we went off to Sweden for the foreseeable future, I thought we should
      make our way up North and spend a few nights in the Flinders Ranges. It was an open invite,
      and we ended up with quite the group, myself and Paula, Nathan, Matt, Brodie, Akira and Irina.
      <br />
      <br />
      The plan was to take a few days off work, have Brodie fly us up in a light aircraft, and then
      have four days hiking through some classic Flinders terrain around St Mary's peak, with a
      shorter option for those who were less excited about four solid days of walking.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="flinders" :pitch="0" :reveal="'all'" />
    <SGText>
      The route we ended up with meant a little bit of doubling back towards the end in order to get
      to a pickup location. Mum and Rick volunteered to be our support car, but wouldn't be there
      until the second day. This added a little bit more complexity to what was turning out to be
      the most logistically ambitious hike I'd ever planned. We had a long and short route, weight
      limits on the aircraft, other friends coming to hang out with the short routers after the
      short route who wanted to borrow kit, people coming from different cities, and Paula and I
      were spending the night before at Nathans.
      <br />
      <br />
      Needless to say, packing for this trip took some thinking, and I ended up with several piles
      of gear, for various stages and people, that incredibly all made it where they needed to go.
      <br />
      <br />
      A few days before the trip, the forecast was not looking great for flying, with low visibility
      right where we would be travelling through. With no improvement the night before, the call was
      made to drive up, which meant an early start the next morning, and a long drive ahead of us.
      <br />
      <br />
      We made it to Hawker by lunchtime, where we met up with Akira and Irina who'd driven up from
      Lincoln, and ate our hiking-style wrap-based cucumber and salami lunch in the park. We were
      under a bit of time pressure; we needed to be hiking by 1:00pm at the latest to have any
      chance of making it to camp before dark, so we set off again quickly, this time in convoy.
      <br />
      <br />
      We left the highway onto Moralana Gorge road, where we stopped immediately in front of a
      bullet riddled road closed sign. There’d been a lot of rainfall recently, and the road was
      subject to flooding. The road closure was a bit of a surprise, it had been closed in the lead
      up to our hike, but had been open for the last two days. Well, at least according the website,
      which due to the lack of service wasn’t a useful crosschecking tool at the time. While we were
      pretty confident that we’d be able to get through with the 4WD, our 2WD support car had to be
      able to get through in order to pick up the other car (did I mention this hike was
      logistically ambitious?), and the sign saying shooting was active in the area, made us want to
      get some confirmation.
      <br />
      <br />
      So off to Rawnsley Park station we went, which is where we initially planned to fly into.
      There, we got confirmation about the road quality, and some information about the shooting
      activities, and we were back on Moralana Gorge road, which ended in an extremely slanted
      carpark, where we left the cars and continued on foot.
    </SGText>
    <SGMapFollow
      :geometry="dayOneGeom"
      :follow="true"
      :use-time="false"
      :show-time="true"
      :follow-pitch="70"
      :overview="true"
      :satellite="true"
      :dynamic-lighting="true"
    />
    <SGGallery
      :list="[
        '20240712_141222.jpg',
        '20240712_141456.jpg',
        'PXL_20240712_044449315.jpg',
        '20240712_143215.jpg',
        '20240712_144750.jpg',
        'PXL_20240712_050423870.jpg',
        '20240712_150303.jpg',
        '20240712_153325.jpg',
        '20240712_151027.jpg',
        '20240712_153416.jpg'
      ]"
    ></SGGallery>
    <SGText>
      The hike up through Black Gap and over Bridle Gap was absolutely beautiful, slowly revealing
      more of the Red and Elder Ranges behind us as we climbed. It was also pretty steep in parts,
      and we took a welcome break at the high point in the middle of Bridle Gap. There, we had a
      decision to make. We were still quite tight on time, but there was a hill to our left called
      Dick Nob, which is a silly name, making Matt and Brodie want to climb it, and hiding a
      geocache, which made Akira want to climb it. Paula and I were in for both those reasons, and
      leaving the packs at the bottom, we left the trail to make a summit.
      <br />
      <br />
      Matt and Brodie’s path was rather more vertical than ours, with some more rockfall, though we
      did have to contend with entire rockfaces covered in wallaby droppings.
    </SGText>
    <SGMapOrbit
      :center="[138.54336937019718, -31.579173755075864]"
      :zoom="15"
      :pitch="70"
      :hide-marker="true"
      :satellite="true"
    />
    <SGGallery
      :list="[
        '20240712_155334.jpg',
        '20240712_155424.jpg',
        '20240712_160447.jpg',
        '20240712_160501.jpg',
        '20240712_160559.jpg',
        '20240712_160819.jpg',
        '20240712_160832.jpg',
        'PXL_20240712_063152492.jpg',
        '20240712_162053.jpg',
        'PXL_20240712_065224071.jpg'
      ]"
    ></SGGallery>
    <SGText>
      With Dick Nob summitted, and geocache found, we headed back down, where we found that
      (surprise), we would need quite a cracking pace to make camp before dark.
      <br />
      <br />Luckily, the terrain had flattened out significantly, and we were keeping a good pace,
      which got us most of the way there, but we decided with a few minutes of light left to stop
      where we were and do the last 2kms the next day.
      <br />
      <br />We made camp in a nice little flat spot, where we stargazed, ate our dinner, and learnt
      that Akira had only brought Mac and Cheese to eat for every meal.
    </SGText>
    <SGGallery
      :list="[
        '20240712_170710.jpg',
        '20240712_171907.jpg',
        '20240712_171937.jpg',
        'PXL_20240712_075024113.jpg',
        'PXL_20240712_075417683.MP.jpg',
        'PXL_20240712_104235784.MP.jpg'
      ]"
    ></SGGallery>
    <SGDayBreak />
    <SGText>
      The night was cold. Some of us were better prepared for that than others. Brodie, still
      working out his hammock setup, felt it the most with a restless night, as too did Irina on a
      half length sleeping mat. When the suns rays started to slightly bring the temperature up,
      many of us took advantage of it to get some more comfortable sleep.
      <br />
      <br />
      As a result, we broke camp rather later than initially planned, but well rested. The goal
      today was to climb up and over Tanderra Saddle, and make our way down to Wilpena Pound, where
      the more sensible hikers would stay, while the silly ones continued on to camp at Wilcolo
      Campsite.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="flinders?.features[1]" />
    <SGText>
      <br />
      <br />
      The walk up to the saddle was relatively uneventful, easily making it to the top for lunch.
      The chopper pilot back at Rawnsley Station may have been right to question our direction of
      travel, as all the views were behind us again. The views at lunch, however, were excellent and
      all around us. We ate well, knowing we had a resupply a few hours away.
    </SGText>
    <SGGallery
      :list="[
        'PXL_20240712_224012445.jpg',
        'PXL_20240713_005906686.MP.jpg',
        '20240713_103459.jpg',
        '20240713_121635.jpg',
        'PXL_20240713_024713364.jpg',
        'PXL_20240713_032554555.jpg',
        '20240713_130444.jpg',
        '20240713_130515.jpg',
        '20240713_130522.jpg'
      ]"
    ></SGGallery>
    <SGText>
      Unfortunately, it took us a few more hours than expected to reach the resupply. Progress down
      the steep and rocky hillside was slow and technical, and it wasn't until we were back on flat
      ground that we were confident we'd get in on time. The landscape in the park was always
      changing; now in the shadow of the pound, we were walking through creek beds, trees were
      covered in lichen, and the air was noticeably cooler.
      <br />
      <br />
      We met up with Mum and Rick at the Wilpena Campground just as they were getting settled in,
      and we had about 20 minutes of chaos before we needed to be walking again to make our
      campsite. We resupplied, dropped off, refilled, caught up, tried to explain the plan, and
      increased our daily scroggin budget in a hectic rush, sure we were forgetting something. We
      somehow managed to convince Brodie to keep walking/limping, and set off at best pace for our
      campsite, arriving just before last light yet again.
    </SGText>
    <SGMapFollow
      :geometry="dayTwoGeom"
      :follow="true"
      :overview="false"
      :use-time="false"
      :show-time="true"
      :satellite="true"
      :dynamic-lighting="true"
    />
    <SGGallery
      :list="[
        'PXL_20240713_035650511.MP.jpg',
        '20240713_135537.jpg',
        'PXL_20240713_053804412.jpg',
        'PXL_20240713_071414475.jpg',
        '20240713_171357.jpg'
      ]"
    ></SGGallery>
    <SGDayBreak />

    <SGText> We woke to the most beautiful morning light on the side of the range. </SGText>
    <SGMapFollow
      :geometry="dayThreeGeom"
      :follow="false"
      :overview="true"
      :use-time="true"
      :satellite="true"
    />
    <SGMapFollow
      :geometry="dayFourGeom"
      :follow="true"
      :overview="true"
      :use-time="false"
      :satellite="true"
    />
  </DetailView>
</template>
