<template>
  <div class="About">
    <h2 class="About-Heading">
      お知らせ
    </h2>
    <TextCard title="29日発表の感染者数について">
    2020/05/29<br>
    5月29日に大阪府より、居住地について「調査中」とされていた感染者のうち、7人が市内在住者であることが発表され、また空港検疫で陽性が判明していた1人についても市内在住であることが判明しました。<br>
    当サイトでは陽性者数をカウントしていますが、市では8人について詳細が不明なため、新規感染者数のグラフにはカウントされていません。<br>
    本件についての詳細が記載されている市の該当ページは<a href="https://www.city.higashiosaka.lg.jp/0000027226.html" target="_blank">こちら</a>   
    </TextCard>
    
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}
a {
  @include text-link();
}
</style>
