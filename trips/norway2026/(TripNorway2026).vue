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
    <SGHeader>Nor-Way That Will Take 5 Hours</SGHeader>
    <SGText>
      Words here.
      <br />
      <br />
    </SGText>
    <SGMapCutout />
    <SGGallery
      :list="[
        'PXL_20260707_190009778.jpg',
        '20260707_213718.jpg',
        'IMG_9319.jpg',
        'IMG_9322.jpg',
        'IMG_9328.jpg'
      ]"
    />
    <SGGallery
      :list="[
        'PXL_20260708_103403581.MP.jpg',
        'IMG_1419.jpg',
        'PXL_20260708_123130106.jpg',
        'IMG_9342.jpg',
        'PXL_20260708_132325025.jpg'
      ]"
    />
    <SGGallery
      :list="[
        'IMG_1426.jpg',
        'PXL_20260708_185126629.jpg',
        'IMG_9359.jpg',
        'PXL_20260708_205227912.LONG_EXPOSURE-01.COVER.jpg',
        'IMG_9364.jpg'
      ]"
    />
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
    <SGGallery
      :list="['PXL_20260710_082120373.jpg', 'PXL_20260710_090857229.jpg', '20260710_111733.jpg']"
    />
    <SGGallery
      :list="[
        'IMG_1441.jpg',
        'PXL_20260710_101519075.LONG_EXPOSURE-01.COVER.jpg',
        'IMG_9427.jpg',
        'PXL_20260710_104312890.LONG_EXPOSURE-01.COVER.jpg'
      ]"
    />
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
    <SGGallery :list="['IMG_9566.jpg', '20260712_174033.jpg', 'PXL_20260712_205318659.jpg']" />
  </DetailView>
</template>
