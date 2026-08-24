<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGDayBreak from '@/components/SGDayBreak.vue'
import SGMapFollow from '@/components/SGMapFollow.vue'
import { lineSliceAlong, bearing, lineSlice, length } from '@turf/turf'

const { data: geom } = useTripDetails()
const hikeGeom = geom.value?.features[1]
console.log('hikeGeom:', hikeGeom)
const lengthof = length(hikeGeom)
console.log('length:', lengthof)
</script>

<template>
  <DetailView>
    <SGHeader>Nor-Way That Will Take 5 Hours</SGHeader>
    <SGText>
      <p>
        We met in the front room of a Vietnamese restaurant as it moved steadily towards closing. It
        was perhaps not the way we expected our Norwegian roadtrip to begin, in amongst the lucky
        cat statuettes and faded landscapes from across the globe. Paper bags appeared on the
        counter and after a brief confusion about the presence and type of utensils, we made our way
        out of the closing restaurant to a closed outdoor balcony bar overlooking the water. There
        we took the chance to catch up properly over noodles and questionable Korean sweets.
      </p>
      <p>
        After eating, the five of us, Nathan, Paula, Dan, Joel and Amelia squashed into the car, the
        already overfilled boot forcing backpacks and kilos of pick-n-mix lollies onto laps. Our
        AirBnB location was plugged into Google maps and we were back on the road. Google suggested
        we take an unmarked (and as it turned out, non-existent) highway exit putting us in front of
        a closed gate, which required a bit of Tokyo Drift to get back onto an active (luckily quite
        sleepy) highway. When we did eventually arrive at our accommodation we were pleasantly
        surprised by the idyllic Nordic Log Cabin we’d booked for the night. The steepness of the
        cabins position partway up the mountain had us overlooking what appeared to be a
        never-ending valley. After a long day of travel, we finally had a chance to exchange a few
        gifts from across the globe.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20260707_190009778.jpg',
        '20260707_213718.jpg',
        'IMG_9319.jpg',
        'IMG_9322.jpg',
        'IMG_9328.jpg'
      ]"
    />
    <SGDayBreak />
    <SGText>
      <p>
        The morning found us out on the balcony enjoying the view over the valley as we ate brekkie
        and enjoyed the coffee supplies found in the cabin. We played our first round of car boot
        tetris as we attempted to lighten the load on our laps and relocated all our bags to the
        boot. Somehow we achieved the impossible, though it did take us the best part of 40 minutes.
        Taking a late checkout, we headed out on a hike, which was lovely, but when it came to an
        end we had found no good places for lunch, and so decided that a second hike was in order.
      </p>
    </SGText>
    <SGMapCutout
      :fit-bounds-geometry="geom"
      :fit-only-to-indexes="[2, 3]"
      :satellite="'contours'"
    ></SGMapCutout>

    <SGText>
      <p>
        The start of this lunch spot hike proved impossible to reach with our fully laden car, and
        after having to add four manpower to the car's horsepower to crest the hill, we decided to
        continue on foot. We didn’t quite make it all the way before stopping for our first round of
        salami sandwiches, but after a little more effort we made it to the top to finish them off.
        Reaching the summit provided an exceptional view over the valley where we'd spent the night
        and the river we’d be following for the rest of the day. Second hike in two days completed,
        we jumped back in the car and drove several hours to our camping spot for the night, Gjeilo
        Camping, watching the mountains slowly growing as we made our way West.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20260708_103403581.MP.jpg',
        'IMG_1419.jpg',
        'PXL_20260708_123130106.jpg',
        'IMG_9342.jpg',
        'PXL_20260708_132325025.jpg'
      ]"
    />
    <SGText>
      <p>
        We booked for two nights and found a quiet spot under the pine trees to set up camp in our
        river-side campground. Camp stove chilli con carne followed by an entire leftover wedding
        cake fueled us for a late night of Monopoly Deal. After just enough rounds that we (mostly
        just Nathan) were satisfied with our millions in the bank we headed down to the river to
        obtain some 11pm ‘sunset’ photos before brushing teeth and heading to bed in the eternal
        twilight.
      </p>
    </SGText>

    <SGGallery
      :list="[
        'IMG_1426.jpg',
        'PXL_20260708_185126629.jpg',
        'IMG_9359.jpg',
        'PXL_20260708_205227912.LONG_EXPOSURE-01.COVER.jpg',
        'IMG_9364.jpg'
      ]"
    />
    <SGDayBreak />
    <SGText>
      <p>
        We asked the woman at reception for suggestions of where to go for the day. She produced a
        paper map from the piles covering every flat surface in the small cabin, and pointed to a
        short loop starting in the town of Lom. Classic Dan hike planning indicated that we would
        finish the ‘4km’ hike in less than 2hrs, but it might be a good start to the days’
        activities.
      </p>
      <p>
        The hike began in the picturesque town of Lom, built around fast flowing sky blue river
        rapids, and made its way up through the outdoor museum, where we were walking through a mix
        of old wooden buildings and modern hammocks slung between the trees. The town stops abruptly
        where the terrain slopes upwards into windbattered birch forest, into which we hiked.
      </p>
      <p>
        As the elevation increased so did the cloud of flying insects surrounding us. The hikers we
        passed on their way down carried even larger clouds than we did, warning us that their
        magnitude only continued to increase the higher we were set to climb. The heat was making us
        all hungry but we forced ourselves to push on above the treeline in the hope of a breeze to
        wash the insects away before stopping to eat. Our first lunch spot had magnificent views
        over the surrounding mountains but was still a demoralisingly long way from the actual peak
        of Lomseggen Mountain. We continued upwards truly amazed by the incredible view before us; a
        valley filled with stunning blue rivers bordered by distant snow covered peaks.
      </p>
    </SGText>
    <SGMapFollow
      :geometry="hikeGeom"
      :satellite="'contours'"
      :pitch="50"
      :follow="true"
      :use-time="false"
      :show-time="false"
      :follow-pitch="70"
      :overview="true"
    />
    <SGText>
      <p>
        When we finally arrived back in Lom 5hrs later, we’d completed 10.6kms with just over 800m
        elevation, and were in no mood to be doing any further walking that day. Far beyond just a
        short loop, this had been a challenging hike. We’re so used to time and difficulty estimates
        being overstated in Australia, but in Norway if they say a number, they mean the number. An
        ice-cream purchase from the local Kiwi improved morale, even if it did introduce momentary
        decision paralysis.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'IMG_9384.jpg',
        '20260709_131129.jpg',
        '20260709_131139.jpg',
        '20260709_133252.jpg',
        '20260709_135416.jpg',
        '20260709_144159.jpg',
        '20260709_144220.jpg',
        '20260709_144226.jpg',
        '20260709_144236.jpg',
        '20260709_144429.jpg',
        'PXL_20260709_125102076.MP.jpg',
        'PXL_20260709_132132137.jpg',
        'IMG_9391.jpg',
        'PXL_20260709_150622197.LONG_EXPOSURE-01.COVER.jpg',
        'PXL_20260709_190502014.jpg',
        '20260710_111742.jpg'
      ]"
    />
    <SGText>
      <p>
        Back in camp, we cashed in our five minutes of shower time, and Joel finally got a chance to
        do the washing he’d been looking forward to all trip. We met a very pushy German lady in the
        camp kitchen, who wanted to know exactly when we would be done with that stovetop or pot,
        down to the second. We spent the evening with our pasta and a slightly warm (but delicious)
        birch beer we’d picked up as ‘Smak i Lom’ was closing, surrounded by our wet clothes hanging
        amongst the trees in the hope they would all be dry by morning.
      </p>
    </SGText>
    <SGDayBreak />
    <SGText>
      <p>
        We’d seen the bakery in Lom doing a roaring trade as we’d passed yesterday, with the line
        stretching out the door, and so decided that it would make a good spot for breakfast, even
        if it meant backtracking a little. We tried both the classic kannelle-bulle (cinnamon bun)
        and the Norwegian skolebolle (school buns), which was like a finger bun but infused with
        butter, cardamom and vanilla pastry cream then covered in coconut. These all paired
        exceptionally well with coffee and the very complicated ordering system for fresh smoothies.
      </p>
      <p>
        We hit the road again, heading west, but not before stopping to look at one of the largest
        wooden churches in Norway. We had found a few interesting diversions along our route too,
        the first one being a waterfall just off the road. We were skimming stones across the cool
        waters when two fighter jets screamed overhead, close enough for the pilots to see our
        shocked expressions if they’d taken their eyes off the narrow valley walls they were
        navigating through. Quite a surprise.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20260710_082120373.jpg',
        'PXL_20260710_090857229.jpg',
        '20260710_111733.jpg',
        'IMG_1441.jpg',
        'PXL_20260710_101519075.LONG_EXPOSURE-01.COVER.jpg',
        'IMG_9427.jpg',
        'PXL_20260710_104312890.LONG_EXPOSURE-01.COVER.jpg'
      ]"
    />
    <SGText>
      <p>
        Back in the car, we were debating whether to take the scenic drive through the mountains, or
        the more boring, but much flatter tunnel. Our car was in limp mode for the whole trip due to
        some DPF readings, and we were worried it wouldn’t make it up the mountain pass. In the end
        though, we decided to risk it, and were immediately rewarded with yet more stunning
        Norwegian views along the Gamle Strynefjellsvegen. The road was built by hand between
        1889-1894 to increase tourism in the fjord villages, and hasn’t really been upgraded since.
        Large upturned stones mark the edges of the narrow gravel track, and navigating the windy
        road around large motor homes was quite stressful and not made any easier by backseat
        drivers. The landscape of the valleys more than made up for it, and was a beautiful backdrop
        to our lunch of cold pasta, chips, salami and chilli con carne sandwiches.
      </p>
      <p>
        We also managed to find a small pocket of unmelted snow along the way, where Joel could
        experience his first time making snowballs and sliding down the hill on our sitmats. The
        nearby kids were very jealous.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'o_DJI_0153_2.m4v',
        '20260710_131215.jpg',
        'IMG_1448.jpg',
        'IMG_1452.jpg',
        'IMG_9448.jpg',
        '20260710_135147.jpg',
        'IMG_1455.jpg',
        'IMG_5323.jpg',
        'IMG_9475.jpg',
        'PXL_20260710_131928997.LONG_EXPOSURE-01.COVER.jpg',
        'PXL_20260710_132022680.LONG_EXPOSURE-01.COVER.jpg',
        'IMG_9481.jpg',
        'IMG_9491.jpg',
        'IMG_9492.jpg'
      ]"
    />
    <SGText>
      <p>
        By early evening, we were properly in fjord country. For once we had an idea of where we
        would like to stay; our Swedish friends had suggested a campsite on Lake Lovatnet. We had
        considered booking a spot, but the best locations were drop in only, and so we had decided
        to gamble. Our chances were not looking good as we drove towards the campsite past many
        ‘fullbooket’ signs, and despite our positive attitude, we found a matching sign when we
        arrived at Sande. We continued along the road for a little longer, but with all the
        campsites we passed full, Amelia began to do some quick googling, which is how we found out
        about Casper, calling ahead this time to ensure there was something available.
      </p>
      <p>
        After 23 minutes of driving through fjord land, with Amelia reading every review and
        spouting praise for the campsite owner, we got to meet the now very famous Casper. We drove
        up a narrow gravel track alongside more skyblue water before being stopped by a guy wearing
        earmuffs, and surrounded by kids. This turned out to be Casper, who we did not see without
        his earemuffs, and very much lived up to his 5 star personality. He directed us to an
        exceptional private spot on the water a little way from the main camping area. We set up
        camp with a hint of rain on the horizon, cooked dinner and headed to bed.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'IMG_9505.jpg',
        'IMG_9510.jpg',
        'IMG_9511.jpg',
        'PXL_20260710_181251307.jpg',
        'PXL_20260710_200214457.MP.jpg',
        'PXL_20260711_085337700.jpg'
      ]"
    />
    <SGDayBreak />
    <SGText>
      <p>
        We woke to a cloudy morning, with a few spots of rain dotting the tents, and after a
        relaxing morning, decided to attempt the nearby hike Casper had mentioned last night when he
        came by to check on us. We squeezed past the cabins surrounding the lake, and found an
        unsurprisingly steep track up the side of the fjord. Our destination was a group of huts,
        about halfway up (Nathan says ¾ at least ‘because clouds’), and once again we were glad to
        have nowhere else to be, because the going was relatively inclined. We had our sandwiches
        and Norwegian chocolate by the moss covered huts, setup a timelapse that immediately fell
        over, and reclined our way back down to camp. Despite the sun hiding behind the rolling
        cloud cover, we were sufficiently sweated to enjoy a lake-cold ice-tea that we’d made fresh
        that morning from a powder and chilled in the lake.
      </p>
      <p>
        Paddling across a fjord in Norway is very expensive. While waiting for the laundry back at
        Geilo, Joel and Daniel had been researching canoe hire, and found the cheapest option was
        almost $800AUD for the five of us. Before the washing machine finished, we had resolved to
        stand on the shore and use our imaginations.
      </p>
      <p>
        Luckily, we were staying with Casper, the friendly ghroundskeeper. Our lovely secluded
        campsite had a kayak sitting by the bank, owned by a generous local, who casually mentioned
        that we could use it when he wandered past on his evening walk. We added to that Caspers’
        two SUPs, and we were all out on the water by midafternoon for a bargain price of $0.
      </p>
      <p>
        We made a lap of the lake, and felt like we were becoming part of the scenery. As we’d
        travelled through the country, we would see people out on the fjords, or paragliding over
        the mountains, and it felt like a natural fit to have humans in these landscapes. We’d taken
        photos out the car window when we would see people on the lakes, and now we were the
        features of other peoples’ photos.
      </p>
      <p>
        Luckily, no one was taking photos when Nathan beached his SUP on a large and very avoidable
        rock (he wants me to say it was in the rapids, which is true if rapids are quite slow).
        Predictably, paddling the fjords is a very pleasant experience, calm clear water, a few lake
        cabins and plenty of ducks. Post-paddle, we fulfilled Paula’s main goal of the trip, eating
        hotdogs.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20260711_092354364.jpg',
        'IMG_1477.jpg',
        'IMG_1480.jpg',
        'IMG_1486.jpg',
        'IMG_9527.jpg',
        '20260711_221908.jpg',
        'IMG_9557.jpg'
      ]"
    />
    <SGDayBreak />
    <SGText
      ><p>
        The next day we packed up, performed our final boot-tetris feat, and drove to Dombås where
        we discovered that not all of Norway is beautiful. The town of Dombås is essentially a truck
        stop with a train station next to a caravan park. That’s not a completely fair description,
        there’s also two extremely expensive pizza places, and a good view down the valley to parts
        of Norway that are not Dombås.
      </p>
      <p>
        Dombås was also the town in which we would farewell Joel and Amelia (who had had enough of
        extended daily walks) as they continued their journey into other areas of Norway and
        Iceland. Upon arrival they braved one of the expensive pizza places (testing the thriftiness
        of the cheaper members of the party with a delicious smell) and ensured that all of their
        luggage was successfully removed from various nooks in the car and squashed into their
        megapacks. We commandeered a spare parking space at the train station with our picnic
        blanket, and made scroggan for the next part of our adventure whilst waiting for their train
        to arrive.
      </p>
      <p>
        After saying our goodbyes, we went down the hill to the caravan park, where the extremely
        inaccurate map led us a to campervan only site, earning us a visit from the less friendly
        but bicycle riding groundskeeper, who redirected us to a spot with an excellent view of the
        campervans and a broken power outlet. We spent the evening lightly stressed, packing and
        repacking our bags for the 5 day hike ahead of us. We cooked our own dinner, and in the
        process discovered our camp saucepans don’t work on induction stoves. Nathan made three
        separate supermarket trips during the evening to pick up the various things we thought we
        might need.
      </p>
      <p>
        As it turns out, there’s one more thing we hadn’t seen in Dombås, the heliport. For some
        reason, there’s a big nighttime hospital-based helicopter presence in Dombås, with several
        flights throughout the night keeping us awake.
      </p>
      <SGDayBreak />
      <p>
        We woke to the sound of helicopters, followed by the sound of the huge van + caravan combo
        parked opposite leaving sometime before 6:00. We made the best of it, and groggily started
        our final preparations. We had a bus to catch at 9:01 from the centre of town, and quite a
        number of chores to do, so it was all a last minute rush, culminating in us parking the car
        where we would be leaving it at 8:55, and then running with our heavy overnight packs along
        the road into town and towards the bus stop.
      </p>
    </SGText>

    <SGGallery :list="['IMG_9566.jpg', '20260712_174033.jpg', 'PXL_20260712_205318659.jpg']" />
    <SGText><p>To be continued…</p></SGText>
    <SGMapCutout />
  </DetailView>
</template>
