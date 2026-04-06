<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGText from '@/components/SGText.vue'
import SGTimeline from '@/components/timeline/SGTimeline.vue'
import TLPhoto from '@/components/timeline/TLPhoto.vue'

import TLMapWindow from '@/components/timeline/TLMapWindow.vue'
import TLPhotoPin from '@/components/timeline/TLPhotoPin.vue'
import TLNote from '@/components/timeline/TLNote.vue'
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
        I always like a loop, but finding busses that would make it work on a public holiday was a
        challenge. Eventually, I decided to go from Sörfjärden to Strömsbruk, with one overnight
        stop, and a hard deadline to reach the end by 5:30pm Friday to catch the only bus home.
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
        :satellite="true"
      ></TLMapWindow>
      <TLPhotoPin
        filename="20260402_133731.jpg"
        aspect="landscape"
        :span="7"
        caption="Where the bus dropped me off, thought I was in red house Venice"
        :coords="[17.427442812501795, 62.03084643177476]"
      />

      <TLPhotoPin
        filename="20260402_135857.jpg"
        aspect="square"
        :span="5"
        caption="Some very nice summer houses out here"
        :coords="[17.41414943461018, 62.021848700976705]"
      />
      <TLMapWindow
        :span="6"
        :center="[17.41414943461018, 62.021848700976705]"
        :zoom="14"
        :satellite="true"
      ></TLMapWindow>
      <TLNote :span="7" date="2nd October">
        Note text<br />second<br />second<br />second<br />second<br />second
      </TLNote>
      <TLPhoto
        filename="20260402_135042.jpg"
        aspect="portrait"
        :span="5"
        caption="Why do my hikes always have an infinite beach section?"
        :coords="[17.42366844147341, 62.027339108205354]"
      />
      <TLPhoto
        filename="20260402_135042.jpg"
        aspect="landscape"
        :span="7"
        caption="Why do my hikes always have an infinite beach section?"
        :coords="[17.42366844147341, 62.027339108205354]"
      />
      <TLPhoto
        filename="20260402_135857.jpg"
        aspect="square"
        :span="5"
        caption="Some very nice summer houses out here"
        :coords="[17.42639771213942, 62.030104524605065]"
      />
    </SGTimeline>

    <SGText>
      Words here.
      <br />
      <br />
    </SGText>
  </DetailView>
</template>
