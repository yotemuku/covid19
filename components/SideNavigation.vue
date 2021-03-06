<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('Navi Open')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.png" :alt="$t('Tokyo')" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('COVID-19') }}<br />{{ $t('Measures site') }}
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('Navi Close')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <!--<small class="SideNavigation-Copyright" lang="en">
          Content on This Site is Licensed Under a
          <a
            rel="license"
            target="_blank"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attribution 4.0 International License </a
          ><br />
          2020 Osaka Prefectural Government × CODE for OSAKA
        </small>-->
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "Navi Open": "サイドメニュー項目を開く",
    "Navi Close": "サイドメニュー項目を閉じる",
    "Tokyo": "東大阪市",
    "COVID-19": "新型コロナウイルス感染症",
    "Measures site": "対策サイト（非公式）",
    "Tokyo Metropolitan Government": "東大阪市",
    "Tokyo COVID-19 Task Force": "新型コロナウイルス感染症対策本部",
    "The latest updates": "市内の最新感染動向",
    "If you have any symptoms": "新型コロナウイルス感染症が心配なときに",
    "for Families with children": "お子様をお持ちの皆様へ",
    "for Citizens": "府民の皆様へ",
    "for Enterprises and Employees": "企業の皆様・はたらく皆様へ",
    "Official statements from Task Force": "大阪府新型コロナウイルス感染症対策本部報",
    "Cancelled public events": "東大阪市主催等 中止又は延期するイベント等",
    "Government official website": "東大阪市公式ホームページ",
    "Message from Governor Koike": "市長からのメッセージ",
    "About us": "当サイトについて",
    "About covid19": "感染症患者の発生状況について",
    "Related info": "新型コロナウイルスに関する支援情報",
    "Task Force": "危機管理法定対策本部会議などの開催状況",
    "Message from Governor": "市長からのメッセージ",
	"Bousai Net": "おおさか防災ネット東大阪市",
    "Official Twitter": "東大阪市公式Twitter",
    "Official Facebook": "東大阪市公式Facebook",
    "Official LINE": "東大阪市公式LINE",
    "Bousai Twitter": "おおさか防災ネットTwitter"
  }
}
</i18n>

<script>
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('The latest updates'),
          link: '/'
        },
        {
          icon: 'covid',
          title: this.$t('About covid19'),
          link: 'https://www.city.higashiosaka.lg.jp/0000027226.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('Related info'),
          link: 'http://www.city.higashiosaka.lg.jp/0000027157.html'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('Task Force'),
          link: 'http://www.city.higashiosaka.lg.jp/0000026863.html',
          divider: true
        },
        {
          title: this.$t('Message from Governor'),
          link:
            'http://www.city.higashiosaka.lg.jp/0000026865.html'
        },
        {
          title: this.$t('About us'),
          link: '/about'
        },
        {
          title: this.$t('Government official website'),
          link: 'http://www.city.higashiosaka.lg.jp/'
        },
        {
          title: this.$t('Bousai Net'),
          link: 'http://www.osaka-bousai.net/higashiosaka/',
		  divider: true
        },
        {
          title: this.$t('Official Twitter'),
          link: 'https://twitter.com/higashiosaka_pr/'
        },
        {
          title: this.$t('Official Facebook'),
          link: 'https://www.facebook.com/higashiosaka.city'
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 20px 16px 0 0;
    width: 110px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & img {
      width: 30px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
    height: 100%;
    overflow-y: scroll;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
</style>
