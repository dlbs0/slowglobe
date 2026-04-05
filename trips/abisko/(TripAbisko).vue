<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
const { data: geom } = useTripDetails()

import SGDayBreak from '@/components/SGDayBreak.vue'
</script>

<template>
  <DetailView weather="snowy">
    <SGHeader>An Adventure in Abisko</SGHeader>
    <SGText>
      Lil and Emma were over in Sweden for a few days over new years, and we decided to visit Abisko
      to experience the deep cold of winter. Every Swede we spoke to seemed to think this was a bad
      idea, but all the tourism websites said this is the must do thing this time of year, so do it
      we did.
      <br />
      <br />
      We had a lovely evening with Ebba at home with the chiminea and some pizza before realising
      that we were going to have to leave for the station in a few minutes. We headed out to our car
      (we finally managed to buy a car!) only to discover a completely flat front tire. With minutes
      left before departure, Ebba made a heroic run to her parents place to pick up their car, and
      dropped us at the station just on time.
      <br />
      <br />
      The SJ93 night train to Narvik was the longest train I've seen in Sundsvall station, and we
      had to walk quite a way to get to our carriage. Unfortunately, because it was just after
      Christmas, the train was full, and we'd only been able to get seats, not beds. It was a pretty
      average nights sleep, broken up by a completely unnecessary and poorly communicated change at
      Boden.
    </SGText>
    <SGGallery :list="['IMG_1110.jpg', '20241228_144459.jpg', '20241228_233632.jpg']" />
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGText
      >We also were notified that the train would not be going all the way to Abisko due to bad
      weather, and would make it's last stop in Kiruna. I rang Kiruna taxi the night before, and
      asked if could book a taxi for the last leg of the journey, and was told that there was no
      need for that, just hail one at the station.
      <br />
      <br />
      This of course turned out to be completely false, and we were waiting in the unpleasant but
      warm station building for almost two hours before we were finally on our way.
    </SGText>
    <SGDayBreak />
    <SGText
      >We spent our time in Abisko hiking around the many trails in the area when the weather was
      good, and sitting in the cosy hostel kitchen, or enjoying the smorgasbord when it wasn't. We
      had some pretty atrocious weather on our first night, and our planned snowmobile adventure was
      no longer possible due to visibility being measured in single digit meters. It did clear up
      later on, and we were able to get some good views of the northern lights over the lake.
    </SGText>
    <SGGallery
      :list="[
        'DSC_0488.jpg',
        'DSC_0468.jpg',
        { img: 'IMG_1123.jpg', caption: 'Wood fired sauna by the lake' },
        'IMG_1132.jpg',
        { caption: 'No, I didn\'t make this photo black and white', img: 'DSC_0395.jpg' },
        'DSC_0481.jpg',
        'DSC_0498.jpg',
        'DSC_0508.jpg',
        'DSC_0571.jpg',
        {
          img: 'DSC_0542.jpg',
          caption: 'This is the path we ended up walking down to go ice climbing later'
        },
        'IMG_1141.jpg',
        {
          img: 'IMG_1172.jpg',
          caption:
            'The train station was a blizzardy mess, maybe it was a good thing we didn\'t have to visit'
        }
      ]"
    />
    <SGText>
      Tuesday was our last day in Abisko, and after cleaning our room thoroughly according to the
      very prescriptive card in the corner, we were checked out and assembled in the reception,
      ready to meet our guide for todays activity, ice-climbing. We were both excited and scared for
      the experience ahead.
      <br />
      <br />
      Our guide Gonilla (rhymes with Vanilla), when she arrived, was the picture of Swedish
      outdoorsiness. She was immediately concerned with our levels of warmth, and once assured that
      we were wearing suitable clothes, she began fitting us for crampons. Crampons are big
      triangles of metal stuck to the bottom of your boots, and we were warned that they were easily
      capable of tearing holes in our pants if we walked with our feet too close together. We found
      this out the hard way anyway, despite our best efforts.
      <br />
      <br />
      We headed outside and towards the canyon, marvelling at how the ground we'd be sliding around
      on yesterday was rendered rock steady under our newly spiked feet. After Gonilla setup the
      ropes, we had to make our way down the narrow path on the canyon wall. This was probably the
      most dangerous and definitely the most scary part of the whole experience.
      <br />
      <br />
      Safely down, we were roped up, and went climbing. I think the thing that struck me most about
      it compared to rock climbing is that the ice picks are only a single point holding onto the
      wall, compared to a line of fingers. This means that you need to be really careful about the
      direction that you're pulling through. Climbing the ice was an adrenaline rush; not knowing
      how much you could trust any hold. Back on the ground, we rushed to put our jackets back on
      and warm up with a hot cup of lingonberry juice, waiting for our next attempt.
    </SGText>
    <SGGallery
      :list="[
        'DSC_0542.jpg',
        '20241231_122128.jpg',
        'IMG_1272.jpg',
        'IMG_1282.jpg',
        '20241231_115413.jpg',
        'IMG_1300.jpg',
        'IMG_1321.jpg',
        'IMG_1142.jpg'
      ]"
    />
    <!-- <SGMapCutout :center="[18.784977536167617, 68.35877754299938]" :zoom="17" :pitch="80"  /> -->
    <SGMapCutout
      :center="[18.81999175520332, 68.34185173686888]"
      :zoom="13.7"
      :pitch="83"
      :bearing="168"
      :satellite="'contours'"
      weather="snowy"
    />
    <SGText>
      That afternoon we headed into the town proper to go dog sledding. Dog sledding is pretty much
      as cool as it sounds. The dogs are all excited to be moving, and just want to run whenever
      they're stopped. Once they're running though, it's silent and calm, with just the swish of the
      snow and sound of the dogs panting. We were sledding for an hour across some beautiful
      terrain, surrounded by mountains, and lit by the slowly setting sun. I can't recommend it
      enough, though it might be even better when it's not quite so cold.
    </SGText>
    <SGGallery :list="['IMG_1335-2.jpg', 'IMG_1338.jpg']" />
    <SGMapCutout :center="[20.252554303154056, 67.850241953904]" :zoom="12" />
    <SGText>
      We finished our trip with a night in Kiruna, where of course we saw the Ice Hotel, which had a
      lot more artwork than I had expected. We also got to see the northern lights again, this time
      during one of the highest activity periods of the year. We had a full show overhead, crossing
      the sky from horizon to horizon. Capturing them on camera in the freezing conditions was very
      difficult, exacerbated by the tiny tripod I'd brought with me, which meant that to see through
      the viewfinder I had to dig a hole in the snow to put my face in.
      <br />
      <br />
      The sky continued putting on a show the next night as we boarded our sleeper train home (this
      time with beds), with a green sky outside our window long into the night.
    </SGText>
    <SGGallery
      :list="[
        'DSC_0641.jpg',
        'DSC_0648.jpg',
        'DSC_0652.jpg',
        'DSC_0680.jpg',
        'IMG_1544.jpg',
        'IMG_1561.jpg',
        'IMG_1460.jpg',
        'IMG_1472.jpg',
        'IMG_1465.jpg',
        'IMG_1477.jpg',
        'IMG_1511.jpg',
        'IMG_1533.jpg'
      ]"
    />
    <SGText>
      We had a small alarm clock failure the next morning, and woke up in Gavle just as the train
      started moving again, eventually letting us off in Uppsala. The extra rest was probably well
      worth it, and luckily the train going back the opposite direction was quite cheap.
      <br />
      <br />
      Abisko is an amazing place, I'm looking forward to heading back up there in summer to try
      hiking some longer trails.
    </SGText>
  </DetailView>
</template>
