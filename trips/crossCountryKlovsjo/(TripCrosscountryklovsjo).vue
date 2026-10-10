<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGDayBreak from '@/components/SGDayBreak.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView weather="snowy">
    <SGHeader>Cross Country in Klövsjö</SGHeader>
    <SGText>
      <p>
        We got the opportunity to make our way to Klövsjö (pronounced something like clervhwer) for
        what looked like it would be our last chance to ski for the season. After a quick trip to
        our local Fritidsbanken to pick up some gear, we left for the slopes on a Thursday night
        after work.
      </p>
      <p>
        We were heading towards Ebbas families’ cabin, which was about a three-hour drive away. We
        stopped halfway in Ånge, picking up a vast quantity of supplies at ICA to fuel our weekends
        activities, before devouring a pizza and getting back on the road.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGText>
      <p>
        The employed among us spent Friday morning working from the cabin, but by early afternoon we
        were all packing our things ready to head out to spend the rest of the day cross country
        skiing. A short drive brought us to the trailhead. After years of trying to go cross country
        and never being able to convince anyone else to go with me, this was finally an opportunity
        where the costs of being in the snow were low enough to just give it a go.
      </p>
      <p>
        We skied our way up to the top of the mountain where we found a cabin that, while officially
        closed, was happy to serve us a much-appreciated hot chocolate. While we were sitting
        outside eating our packed lunch of meatball and beetroot salad wraps, a local dog sled team
        pulled up, and we got the chance to have a chat to the enthusiastically conversational
        owner, who just wanted to talk to us about Australia, and wouldn’t let us steer the
        conversation to the much more interesting topic of dogs with sleds. It really seems like
        every Swede has either been to Australia or has family living there, which always amazes me
        given the distance. Then again, here we are...
      </p>
      <p>
        Coming back down the mountain was much harder than going up. It was also much faster. The
        snow quality wasn't great, and we weren't used to not having our heels locked into the skis,
        so turning was tricky and everyone had at least one unplanned seated rest. Despite all of
        this it was a lot of fun, and we’d successfully tricked ourselves into thinking the weekend
        had already begun. Ebba and Carl took charge of dinner that night, pickling apples to
        combine with brie on some delicious burgers.
      </p>
    </SGText>
    <SGGallery
      :list="[
        '2668e084-f729-42c5-93b9-0d6e14cb4073.jpg',
        // 'IMG_2479.jpg',
        'IMG_2493.jpg',
        {
          img: 'o_dedee9a7-b15c-47d9-883e-96f7c6f50dc8.m4v',
          caption: 'Ebba has significantly more practise doing this'
        },
        'd186894c-f18b-4148-b6c3-0361baa2724e.jpg',
        'o_IMG_2485.m4v',
        'o_60a91db5-c7ea-4d8d-92dc-320e85b43775.m4v'
      ]"
    ></SGGallery>
    <SGDayBreak />
    <SGText>
      <p>
        The next day we decided to go downhill skiing at Vemdalen. We were a little bit worried
        about the wind as we left the house, but it turned out to be an absolutely beautiful day
        with clear skies and hardly any wind. There were some sketchy patches of very solid and
        frozen snow in parts, but for the most part the skiing was great.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'IMG_2499.jpg',
        '9d394f66-15d0-486f-88c0-61eed07d9fa4.jpg',
        'IMG_2504.jpg',
        'IMG_2507.jpg',
        '4205e0d9-ce1d-4dbd-8d2a-4833d4f33199.jpg'
      ]"
    />
    <SGText>
      <p>
        We got the chance to play ski patrol briefly, when we were flagged down by someone and asked
        to investigate a skier who had failed to turn and gone over the edge of the groomed runs
        into the trees, where she had then gone into a tree. We skied a little more carefully for
        the rest of the day, ending just before sunset in the shadow of the mountain, seeing the red
        cabins on the opposite slope lit up and reflecting the glow on the sun in their windows.
        European ski towns look quite different to what I’m used to, much more like somewhere where
        people actually live.
      </p>
      <SGDayBreak />

      <p>
        We decided to go for a hike on Sunday morning, driving a few minutes away to walk a
        deceptively slippery path through the trees to a huge ice-covered waterfall. The water had
        hollowed out a huge cave at the base of the waterfall, and we spent a good half hour
        throwing blocks of ice at the roof of the cave to see if we could get it to collapse. We
        could not, but unbothered, we set up our Trangia (only recently worked out that everyone in
        Sweden has one because they’re a Swedish brand) and ate a very welcome hot stew.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'IMG_2561.jpg',
        'IMG_2520.jpg',
        '20250309_133358.jpg',
        'IMG_2549.jpg',
        '20250309_135934.jpg',
        'IMG_2572.jpg',
        {
          img: 'o_IMG_2538.m4v',
          caption: 'The path was a thin layer of fresh snow on ice, so any hills were for sliding'
        },
        '20250309_152028.jpg'
      ]"
    />
    <SGText>
      <p>
        On our way back to the car, we had the bright idea to go for a dip in the river, which was
        something we weren't particularly prepared for. After designating which of our layers would
        become towels, we stripped to our underwear and, feet already freezing in the snow, made our
        way down the steep bank to the water. The water was shockingly cold, and we could only stay
        in for a few seconds, but incredibly refreshing and a great adrenaline rush. The car on the
        way back felt luxuriously warm.
      </p>
      <p>
        After packing up the cabin, we got back in the car and headed for home, which was a largely
        uneventful journey apart from one brief stop. As required by Swedish law, all trips must
        involve some kind of hotdog, and we stopped to acquire ours at a small petrol station in the
        middle of nowhere. The cashier there was rather lovely and obsessed with wombats, and Paula
        somehow managed to get her meal for free after matching that enthusiasm.
      </p>
      <p>
        It was an excellent trip, and such a contrast to the way that I’ve been to the snow before.
        Looking forward to next season.
      </p>
    </SGText>
  </DetailView>
</template>
