<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGText from '@/components/SGText.vue'
import SGTimeline from '@/components/timeline/SGTimeline.vue'
import TLPhoto from '@/components/timeline/TLPhoto.vue'

import TLMapWindow from '@/components/timeline/TLMapWindow.vue'
import TLPhotoPin from '@/components/timeline/TLPhotoPin.vue'
import TLNote from '@/components/timeline/TLNote.vue'
import SGDayBreak from '@/components/SGDayBreak.vue'
</script>

<template>
  <DetailView>
    <SGHeader>Going Coastal</SGHeader>
    <SGText>
      <p>
        The Easter long weekend is always a good time to do something interesting, and in Sweden
        many companies give the Thursday off as well, stretching the time off to five full days.
        Paula had planned a trip to Stockholm with some friends, and I had planned to be in
        Amsterdam with James, but the flight cancellations in Qatar had left me on my own with
        nothing to do.
      </p>
      <p>
        But with the snow clearing, and our new 2-man tent just arrived, I felt like I could finally
        get out and do some hiking. Asking around at work for suggestions, I got a recommendation to
        try out the coastal trail which runs along the East coast of the Nordanstigs Kommun, just to
        the South of us. It actually joins up with a trail that runs all the way into Sundsvall,
        which is now also on the list.
      </p>
      <p>
        I always like a loop, but finding buses that would make it work on a public holiday was a
        challenge. Eventually, I decided to go from Sörfjärden to Strömsbruk, with one overnight
        stop, and a hard deadline to reach the end by 5:30pm Friday to catch the only bus home.
      </p>
      <p>
        I managed to catch a lift with Paula, Ebba, Carl and Li down the E4 to Gnarp, where they
        dropped me off outside the supermarket. Gnarp is a pretty tiny town, but does have a school,
        supermarket and train station, and seems to be the biggest (only?) public transport hub in
        the region. I know I said earlier that the weather was finally right for hiking, but it was
        still 6 degrees, so I had my hood up as I waited outside the school for the bus. Maybe I'm
        not a Swede yet, as the kids swinging on the fence next to me didn't seem to feel it at all.
      </p>
      <p>
        I think it's pretty incredible that there are buses at all in these rural areas, but the
        X-trafik bus that showed up was modern, clean and quite possibly the nicest I've been on. It
        even had seats that converted into rear-facing child seats, which is a great idea.
      </p>
      <p>
        It was only a short 20 minute ride to Sörfjärden, but I was the only one left on the bus by
        the time we got there. My stop was the end of the line, and after the bus driver did a
        three-point turn and drove away, I was left in a quiet holiday area, with cabins crowding
        around the water.
      </p>
    </SGText>
    <!-- <SGMapFollow
      :geometry="dayOneGeom"
      :follow="true"
      :use-time="false"
      :show-time="true"
      :follow-pitch="70"
      :overview="true"
      :satellite="true"
    /> -->
    <SGTimeline>
      <TLMapWindow
        :span="5"
        :center="[17.427442812501795, 62.03084643177476]"
        :zoom="14"
        :pitch="50"
        :satellite="true"
      ></TLMapWindow>
      <TLPhotoPin
        filename="20260402_133731.jpg"
        aspect="landscape"
        :span="7"
        caption="Where the bus dropped me off, thought I was in red house Venice"
        :coords="[17.427442812501795, 62.03084643177476]"
      />
      <TLPhoto
        filename="20260402_135042.jpg"
        aspect="landscape"
        :span="7"
        caption="Why do my hikes always have an infinite beach section?"
        :coords="[17.42366844147341, 62.027339108205354]"
      />

      <TLNote :span="5">
        Following the river, the trail pretty quickly lead onto the beach, before swinging around
        through the holdiay homes and into the forest.
      </TLNote>
      <TLPhotoPin
        filename="20260402_135857.jpg"
        aspect="square"
        :span="6"
        caption="Some very nice summer houses out here; I love the mossy arch"
        :coords="[17.41414943461018, 62.021848700976705]"
      />
      <TLMapWindow
        :span="6"
        :center="[17.41414943461018, 62.021848700976705]"
        :zoom="14"
        :satellite="true"
      ></TLMapWindow>
      <TLPhoto
        filename="20260402_135915.jpg"
        aspect="landscape"
        :span="7"
        :coords="[17.4133, 62.0202]"
      />
      <TLPhoto
        filename="20260402_142838.jpg"
        aspect="square"
        :span="5"
        caption="Classis Swedish mossy forest"
        :coords="[17.4369, 62.012]"
      />
      <TLMapWindow :span="6" :center="[17.4369, 62.012]" :zoom="12" :satellite="true"></TLMapWindow>
      <TLPhotoPin
        filename="20260402_142643.jpg"
        aspect="square"
        :span="6"
        caption="There was still a bit of ice on the trail, and also for some reason, a lot of foam pretending to be ice"
        :coords="[17.4355, 62.0128]"
      />
      <TLNote :span="4">
        I continued through the forest, which might have been some of the nicest trail of the trip.
        At some point, it became national park, and there were several viking burial mounds that I
        saw through gaps in the trees.
      </TLNote>
      <TLPhotoPin
        filename="20260402_160533.jpg"
        aspect="landscape"
        :span="8"
        caption="Taking a break for an afternoon snack"
        :coords="[17.434, 61.9903]"
      />
      <TLPhoto filename="20260402_172921.jpg" aspect="portrait" :span="4" />
      <TLNote :span="4">
        I had some more monotonous walking through the mostly empty village of Hårte, and then
        following the road from there down to my goal for the night, which as it turned out, was
        actually a campsite. I'd picked a random spot on the map that was a short walk from the next
        town, Mellanfjärden, and it turned out to be a nice little campsite right on the water.
      </TLNote>
      <TLPhoto
        filename="20260402_173317.jpg"
        aspect="portrait"
        :span="4"
        caption="This lookout claimed you could see Sundsvall, but I remain unconvinced"
      />
      <TLMapWindow
        :span="4"
        :center="[17.3765, 61.9607]"
        :zoom="13"
        :satellite="true"
        :pitch="30"
      ></TLMapWindow>
      <TLPhotoPin
        filename="20260402_191724.jpg"
        aspect="landscape"
        :span="8"
        caption="My kitchen for the evening"
        :coords="[17.3765, 61.9607]"
      />
      <TLPhoto filename="20260402_191745.jpg" aspect="landscape" :span="8" />
      <TLNote :span="4"
        >The new tent went up nicely, and I really appreciated the freestanding nature, as I had
        only a thin layer of moss to peg into before hitting stone. It was a pretty cold night (not
        that it had been a warm day to start with), and I was very glad I'd thrown in the thermals
        to supplement the sleeping bag.</TLNote
      >
    </SGTimeline>
    <SGText>
      <SGDayBreak />
      <p>
        The next morning, I was going to be meeting up with Johan and Joel, who were keen to join me
        for the day. I started with the classic hiking breakfast of instant porridge, and then we to
        the nearby stream to refill my water.
      </p>
      <aside>
        I have been struggling to find instant porridge in Sweden. They all think it's for babies
        (literally), and that you should just make it yourself from scratch if you want to eat it.
        The problem with that is that the little sachets are very convenient for hiking, and have
        all the milk powder and some dried fruit already there. I just couldn't find any in the
        shops. I have to thank someone I met at a party who heard my grumbling, and then spotted it
        at Willys a month later (the cheaper, less nice supermarket) and got a message to me through
        Carl to let me know. Thank you whoever you were.
      </aside>
      <p>
        Unfortunately, when I got back to camp, my filter was not flowing at all. I later discovered
        that the minerals in the water here calcified inside it last time I backflushed it, and have
        since got it going again with copious amounts of vinegar. But in the moment, that meant that
        my next mission was finding water. I packed up camped and headed into the nearby town of
        Mellanfjärden, which was all but asleep.
      </p>
      <p>
        On my map, there's a tap marked at Mellanfjärden, and this turned out to be true. To be fair
        to the map makers, they didn't say that the tap would do anything when I turned it on, which
        it didn't. The nearby public toilet also turned out to be dry, and a lap of the town didn't
        reveal anything else. Eventually I spotted a person in this empty place setting up
        restaurant tables, and made extremely active eye contact until she opened the door.
      </p>
      <p>
        Water situation solved for now, I headed away from the coast to where I would meet the
        others halfway from their bus stop in Jättendal.
      </p>
    </SGText>
    <SGTimeline>
      <TLPhoto
        filename="20260403_092756.jpg"
        aspect="landscape"
        :span="7"
        caption="Morning view from a bench in Mellanfjärden"
      />
      <TLPhoto
        filename="20260403_101622.jpg"
        aspect="portrait"
        :span="5"
        caption="Didn't quite understand the signage here, but big chimney in the middle of nowhere"
      />
      <TLMapWindow :span="4" :center="[17.312, 61.9651]" :zoom="12" :satellite="true" />
      <TLNote :span="3"
        >I made it to the meeting point with a few minutes to spare, so hung out with the goat while
        I waited.
      </TLNote>
      <TLPhotoPin
        filename="20260403_102554.jpg"
        aspect="portrait"
        :span="5"
        :coords="[17.312, 61.9651]"
      />
      <TLPhotoPin
        filename="20260403_102537.jpg"
        aspect="square"
        :span="6"
        :coords="[17.312, 61.9651]"
      />
      <TLPhoto filename="20260403_120533.jpg" aspect="portrait" :span="6" />
      <TLNote :span="4">
        Once we were united, we headed off along a forest track before turning in again and heading
        for the coast. We had some more nice coastal trail walking, before rounding the bluff and
        finding a nice spot for lunch in the sun. (This is very important, Swedes are equally
        concious of the sun as Australians, just in the opposite direction)
      </TLNote>
      <TLMapWindow :span="3" :center="[17.3355, 61.9135]" :zoom="12" :satellite="true" />
      <TLPhotoPin
        filename="20260403_130307.jpg"
        aspect="portrait"
        :span="5"
        caption="A buff makes a passable coffee filter in a pinch"
        :coords="[17.3355, 61.9135]"
      />
      <TLPhoto
        filename="20260403_135519.jpg"
        aspect="landscape"
        :span="7"
        caption="A very picturesque village on a little island we walked past"
      />
      <TLPhoto
        filename="20260403_135536.jpg"
        aspect="square"
        :span="5"
        caption="This was the only place that felt like people actually lived here"
      />
      <TLNote :span="6">
        Our path took us through Stocka, which on one side is a lovely little village with a small
        shop in which we bought some icecream, but then when you get through the other side, becomes
        some kind of old industrial district. We took a shortcut through a sawmill, which then
        turned into a stables for some reason, both of which shared the same open security gates.
      </TLNote>
      <TLMapWindow
        :span="3"
        :center="[17.33874754884573, 61.89586601523203]"
        :zoom="13"
        :satellite="true"
      />
      <TLPhoto filename="20260403_154043.jpg" aspect="square" :span="6" />
      <TLPhoto filename="20260403_134455.jpg" aspect="square" :span="6" />
      <TLPhoto filename="20260403_120551.jpg" aspect="square" :span="6" />
      <TLNote :span="6">
        Our day had one last push along some more forestry tracks before we reached our destination.
        Unfortunately, there were a lot of trees down, and going around them cost us a lot of time
        and made us lose the path more than once. We briefly considered a shortcut across a marshy
        reed-bed, but turned around when it got a bit too damp.<br />
        Luckily, the path improved eventually, and we made it to Strömsbruk with about 40 minutes to
        spare before the bus.<br />
        Strömsbruk is also a bit strange. It's another small town with a huge industrial complex on
        one side of the river. On the other side is a park that would feel more at home in a city.
        It also has a surprisingly good pizzeria, which we took advantage of while we waited in the
        park.
      </TLNote>
      <TLMapWindow
        :span="6"
        :center="[17.317046652229124, 61.87058208505974]"
        :zoom="14"
        :pitch="30"
        :satellite="true"
      />
      <TLPhoto
        filename="20260403_173000.jpg"
        aspect="portrait"
        :span="6"
        caption="Hostel by the river - they also run canoeing trips from here"
      />
      <TLPhoto
        filename="20260403_173704.jpg"
        aspect="landscape"
        :span="8"
        caption="Joel heading towards the best pizza place in town"
      />
      <TLNote :span="4">
        We made our bus, and then headed back to Gnarp, and then onto the train home, ending a very
        nice little coastal adventure.
      </TLNote>
    </SGTimeline>
  </DetailView>
</template>
