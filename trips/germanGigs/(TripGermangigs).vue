<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SpotifyEmbed from '@/components/SpotifyEmbed.vue'
import SGDayBreak from '@/components/SGDayBreak.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>Three Gigs in Germany</SGHeader>
    <!-- <SGGallery :list="['vid1.m4v']" /> -->
    <!-- <SGGallery :list="['20250201_095913.jpg', '20250131_184152.jpg', 'o_IMG_1899.m4v']" /> -->
    <!-- <SGGallery :list="['/public/Img1899-1.m4v']" /> -->
    <SGText>
      <!-- <img src="/public/Img1899-1.m4v" /> -->
      <!-- <video src="/public/Img1899-1.m4v" controls></video> -->
      For Christmas last year, my gift to Paula was a pair of concert tickets, which would let us
      see three of our favourite bands. As you've probably guessed from the title of this post, the
      catch was that these three gigs would require a bit of travel. But when I found out that
      <em>Cory Wong</em>, <em>Couch</em> and <em>Sammy Rae and The Friends</em> would all be playing
      within a week of each other in Northern Germany where some of Paula's family lives, it seemed
      like an obvious fit.
      <br />
      <br />
      So on Thursday, at midday, we found ourselves once again at the train station in Sundsvall,
      heading South to Stockholm. The ride there was beautiful, our first bit of good weather in
      weeks, and we were able to observe over the three hour trip how the decreasing latitude
      dramatically changed the amount of snow on the ground, down all the way to nothing once we got
      into Stockholm proper.
      <br />
      <br />
      We had a brief wander in Stockholm, vaguely looking for food, and realistically looking at
      architecture, before giving up, eating at the station, and boarding our night train to Berlin.
    </SGText>

    <SGMapCutout :fit-bounds-geometry="geom" :fitOnlyToIndexes="[0]" :reveal="1" />
    <SGGallery :list="['20250130_113836.jpg', 'IMG_1841.jpg', 'IMG_1862.jpg', 'IMG_1889.jpg']" />
    <SGText>
      The ride was quite comfortable, and while we were delayed by a few hours, it was just long
      enough for us to get a 50% refund and meet the very fun conductor who gave us some free
      breakfast.
      <br />
      <br />Arriving in Berlin was a concrete shock; leaving the multilevel open train station you
      are surrounded by brutalist concrete architecture, tall grey squares stretching into the sky
      and covering the ground. It took some time to properly appreciate, but as we wandered the city
      and saw the sights it did begin to grow on me.
    </SGText>
    <SGMapCutout
      :center="[13.373148289091432, 52.522171191747674]"
      :zoom="16"
      :pitch="76"
      :bearing="134"
    />
    <SGText>
      Berlin being Berlin, pretty soon we found ourselves immersed in the war history of the city.
      We visited the Topography of Terror, a museum built on the site of the old secret police
      headquarters, which did an excellent job at explaining the the human side of the city in the
      years before and during the war. It was far too easy to draw parallels to things we could see
      happening today, which is quite scary.
      <br />
      <br />
      On a less end of humanity note, we had dinner at a tiny pizza bar, where the friendly owner
      produced the best tasting pizza I've had in years. Paula complimented him on the gluten-free
      base, saying "it's the best I've ever had", to which he replied "I know" with justified
      confidence.
      <br />
      <br />
      Tonight we would be seeing <em>Couch</em> and <em>Cory Wong</em>, both bands we were excited
      for. After reading reviews of the venue, I was terrified that coat-check, a necessity in the
      German winter, would take hours, but it proved to be a relatively simple process once we had
      managed to procure some Euros by purchasing some Rhabarberschorle.
      <br />
      <br />
      <em>Couch</em> was opening (at 20:00 on the dot), and had a really good set, with a number of
      solos that showed some range that doesn't appear in any of their recorded material.
    </SGText>
    <SpotifyEmbed url="artist/3nYyLjhw4mYzYfJePsCJYJ" />
    <SGGallery :list="['o_IMG_1899.m4v', 'o_IMG_1900_crop.m4v']" />
    <SGText>
      <em>Cory Wong</em> is a great guitarist, backed up by possibly the tightest band I've seen.
      Their drummer had incredible stage presence, the full 5-piece horn section was playing
      harmonies I've never heard in their records, and the whole band was backed by the keys and
      bass. They were touring for the "Starship Syncopation" album, but we got lots of older tracks
      too, with tons of improvisation completely altering the original songs.
    </SGText>
    <SpotifyEmbed url="album/4pg7Me8QZeJoW2qvcLiwSN" />
    <SGText
      >They had a great set, bringing the Couch vocalist on stage for a few songs too. As an encore,
      the took requests from the audience, finally leaving the stage to Bluebird (a request from a
      guy wearing a Louis Cole shirt). We had an excellent time.
    </SGText>
    <SpotifyEmbed url="track/1i4aQnstz1fR7SqFju6B2I" :small="true" />
    <SGGallery
      :list="[
        '20250131_184152.jpg',
        'o_IMG_1904_crop.m4v',
        'o_IMG_1912.m4v',
        '20250201_095913.jpg'
      ]"
    />
    <SGText>
      The next morning we were in pursuit of German bakeries. I was very happy with what I found on
      every street corner, but Paula managed to find a gluten-free place a short walk away, where we
      enjoyed some breakfast (Paula was very unhappy with us sleeping through the hostels
      complimentary fare).
      <br />
      <br />
      Replenished, we made our way to Berlin's museum island, which is pretty much what the name
      suggests. Lots of lovely buildings, but we ended up underground in the DDR museum, where we
      got a much better idea of what was happening post WWII in Berlin. We also got a chance to look
      at the East Side Gallery, a section of the Berlin Wall that was painted by many different
      artists just after the fall.
      <br />
      <br />
      We then had an ICE connection to Osnabrück, which for some reason took us through our least
      favourite German city, Hamburg (where we yet again failed to buy a hamburger). We were quite
      impressed with the first train, it left at exactly the timetabled time, with a modern and
      comfortable interior, and it arrived right on time in Hamburg too. Unfortunately, that was
      where our German train luck ran out, as we were met with a message in the DB app that said
      "Journey not Possible", as the connecting ICE had been cancelled. Unsurprised, we managed to
      rebook onto a different train, which arrived only an hour and one minute later than expected
      (though at 11:34pm), which once again qualified us for a partial refund.
    </SGText>
    <SGMapCutout
      :fit-bounds-geometry="geom"
      :fitOnlyToIndexes="[1, 2, 3]"
      :reveal="{ index: 2, onlyCurrent: true }"
    />
    <SGText>
      We were met at the station by Paula's uncle Peter, with whom we would be staying the week
      with. He drove us to his place, where we collapsed into bed.
    </SGText>
    <SGDayBreak />
    <SGText>
      We spent a really lovely week with Peter, Paula working from kitchen table during the day, and
      then us all spending the evenings together cooking, eating and playing Rummikub and 10,000 (a
      dice game). We got to spend some time with the rest of the extended family too, with plenty of
      trips to Paula's grandmothers house, who still can't quite comprehend my lack of German
      language ability, much to Pia's amusement. We also managed to get out of the house and explore
      the German countryside, marvelling at the 'warm' weather and beautiful sunsets.
    </SGText>
    <SGGallery
      :list="[
        '20250203_172153.jpg',
        '20250202_172747-2.jpg',
        '20250206_161201.jpg',
        '20250206_162916.jpg',
        'IMG_1942.jpg',
        'IMG_1976.jpg',
        'IMG_1989.jpg',
        'IMG_1955.jpg'
      ]"
    />
    <SGText>
      Eventually, the time came for us to leave their hospitality behind, and with one last big
      German breakfast, we headed South for Cologne.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :reveal="3" :fitOnlyToIndexes="[3, 4]" />
    <SGText>
      Cologne is a difficult city to describe. On the surface, it's just like any other modern
      European city; nice old not too tall buildings, relatively pedestrian friendly, and the
      occasional unidentifiable generic bad city smell competing with the bakeries and cafes.
      <br />
      <br />
      But Cologne has a distinct feel to it that's hard to put into words. The streets are often
      almost uncomfortably busy, everyone looks the kind of cool that requires high-end thrift
      stores, and there's an abundance of restaurants serving exotic dishes rather than Berlin's
      same 3 options on every corner. Cologne is known as a cultural and music hub, and you can feel
      it on the streets.
      <br />
      <br />
      The city centre is surrounded by the remnants of several walls, starting with the 4km
      first-century wall bordering the Roman city of
      <em> Colonia Claudia Ara Agrippinensium </em> (which is where Cologne got its name). There's
      then a longer semi-circular Middle-Ages wall that defines the shape of the city, and then a
      line of parkland where WWI defences once formed another ring. I was absolutely amazed by the
      sheer scale of these projects, walking just a small part of them makes me wonder where all the
      stones came from and how many hours of labour it took to assemble those stones into something
      so massive.
      <br />
      <br />
      It should come as no surprise that whilst in Cologne, I visited the Roman museum, which
      surprised me with the quantity and quality of the artifacts they had. For a culture that
      existed thousands of years ago, we know so much about so many individuals. Possibly the secret
      to immortality is a marble bust, so long as the emperor after you didn't die too quickly and
      force the sculptors to repurpose your head.
    </SGText>
    <SGGallery
      :list="[
        '20250209_141728.jpg',
        '20250209_163022.jpg',
        '20250209_170115.jpg',
        '20250209_172628-2.jpg',
        '20250209_173135-2.jpg',
        '20250209_173350.jpg'
      ]"
    />
    <SGText>
      All this history and architecture was of course not the reason we were in Cologne. After our
      last experience being far too early to the gig, we overcompensated, and were rushing for a
      choice of dinner after our first pick, a Vietnamese place, had queues out the door (we ended
      up going back there the next day and understood what the queues were about). After an
      unintentionally cold and vegetarian meal, we were at the concert venue, which was much more
      intimate than our last show.
      <br />
      <br />
      The opener was a German singer/songwriter with a guitar, who sang sad songs in English and
      then told jokes in German. The crowd was almost too receptive, and she was able to get
      everyone in a good mood and singing very quickly. She then had to leave immediately after she
      finished playing to get back to Berlin, encouraging everyone to immediately buy merch.
    </SGText>
    <SpotifyEmbed url="album/3Bhtlh9Mc1CVNaen3eTEyP" />
    <SGText>
      <em>Sammy Rae</em> gave one of the best performances I've been to. The crowd was small, but
      knew all the words and were just incredibly happy to have the band in their home town for the
      first time. I was surprised by the genre bending they got into live compared to the studio.
      The American accents also came out much more clearly in person. The whole band was great, but
      the drummer was once again the standout; very clearly having a great time.
    </SGText>
    <SGGallery :list="['o_IMG_2017.m4v', 'o_IMG_2018.m4v', 'o_IMG_2020_trim.m4v']" />
    <SGText>
      After the gig, we had a drink in the bar, where we ended up sitting next to the keys player,
      whose overheard conversation answered a lot of our questions about the logistics of a band
      tour.
    </SGText>
    <SGDayBreak />
    <SGText>
      Germany had one last adventure for us, which was our first RyanAir flight back home. Somehow I
      ended up in seat 1C, which seems like it would be a great seat with lots of legroom, but
      leaves you right in the way of everyone boarding the plane, and any attempt to utilise that
      legroom has you playing footsies with the flight attendants. We were delayed while armed
      military police searched the plane for someone (they didn't find them), and then we were
      finally in our uncomfortable chairs on the way back home.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :reveal="4" />
    <SGText>
      I still haven't gotten used to how close everything in Europe is, and how cheap and easy it is
      to travel to another country. Hopefully this is the first of many international adventures out
      of Sundsvall.
    </SGText>
  </DetailView>
</template>
