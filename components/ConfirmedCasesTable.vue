<template>
  <svg
    class="confirmed-cases-table"
    viewBox="0 0 340 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="
      ariaLabel(検査実施人数, 陽性物数, 入院中, 軽症中等症, 重症, 死亡, 退院)
    "
  >
    <mask id="path-1-inside-1" fill="white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M141 24H98V120H145V44H242V24H145H141Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M141 24H98V120H145V44H242V24H145H141Z"
      fill="white"
    />
    <path
      d="M98 24V22H96V24H98ZM98 120H96V122H98V120ZM145 120V122H147V120H145ZM145 44V42H143V44H145ZM242 44V46H244V44H242ZM242 24H244V22H242V24ZM98 26H141V22H98V26ZM100 120V24H96V120H100ZM145 118H98V122H145V118ZM143 44V120H147V44H143ZM242 42H145V46H242V42ZM240 24V44H244V24H240ZM145 26H242V22H145V26ZM141 26H145V22H141V26Z"
      fill="#009a5a"
      mask="url(#path-1-inside-1)"
    />
    <text x="104" y="74" fill="#009a5a" font-size="10" font-weight="500">
        回復・
    </text>
    <text x="104" y="86" fill="#009a5a" font-size="10" font-weight="500">
        調整中
    </text>
    <path
      d="M148 47H192V119H148V47Z"
      fill="white"
      stroke="#009a5a"
      stroke-width="2"
    />
    <text x="154" y="74" fill="#009a5a" font-size="10" font-weight="500">
        軽傷・
    </text>
    <text x="154" y="86" fill="#009a5a" font-size="10" font-weight="500">
        無症状
    </text>
    <rect
      x="196"
      y="47"
      width="45"
      height="72"
      fill="white"
      stroke="#009a5a"
      stroke-width="2"
    />
    <rect
      x="1"
      y="1"
      width="45"
      height="118"
      fill="white"
      stroke="#333333"
      stroke-width="2"
    />
    <text x="4" y="74" fill="#4D4D4D" font-size="10" font-weight="500">
        検査実施
    </text>
    <text x="14" y="86" fill="#4D4D4D" font-size="10" font-weight="500">
        件数
    </text>
    <text
      class="black text"
      transform="translate(12 100)"
      :dx="getAdjustX(検査実施人数)"
    >
      <tspan>{{ 検査実施人数 }}</tspan>
      <tspan class="unit" dx="-3">件</tspan>
    </text>
    <mask id="path-10-inside-2" fill="white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M340 0H49V17V22V120H96V22H340V0Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M340 0H49V17V22V120H96V22H340V0Z"
      fill="white"
    />
    <path
      d="M49 0V-2H47V0H49ZM340 0H342V-2H340V0ZM49 120H47V122H49V120ZM96 120V122H98V120H96ZM96 22V20H94V22H96ZM340 22V24H342V22H340ZM49 2H340V-2H49V2ZM51 17V0H47V17H51ZM51 22V17H47V22H51ZM51 120V22H47V120H51ZM96 118H49V122H96V118ZM94 22V120H98V22H94ZM340 20H96V24H340V20ZM338 0V22H342V0H338Z"
      fill="#009a5a"
      mask="url(#path-10-inside-2)"
    />
    <text x="53" y="74" fill="#009a5a" font-size="10" font-weight="500">
        陽性者数
    </text>
    <text x="59" y="86" fill="#009a5a" font-size="10" font-weight="500">
        (累積)
    </text>
    <text x="210" y="86" fill="#009a5a" font-size="10" font-weight="500">
        重症
    </text>
    <rect
      x="245"
      y="25"
      width="45"
      height="94"
      stroke="#009a5a"
      stroke-width="2"
    />
    <rect
      x="294"
      y="25"
      width="45"
      height="94"
      stroke="#009a5a"
      stroke-width="2"
    />
    <text x="300" y="74" fill="#009a5a" font-size="9" font-weight="500">
        陰性確認済
    </text>
    <text x="300" y="85" fill="#009a5a" font-size="9" font-weight="500">
        (退院者累計)
    </text>
    <text
      class="green text"
      transform="translate(60 100)"
      :dx="getAdjustX(陽性物数)"
    >
      <tspan>{{ 陽性物数 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text
      class="green text"
      transform="translate(110 100)"
      :dx="getAdjustX(入院中)"
    >
      <tspan>{{ 入院中 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text
      class="green text"
      transform="translate(157 100)"
      :dx="getAdjustX(軽症中等症)"
    >
      <tspan>{{ 軽症中等症 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text
      class="green text"
      transform="translate(207 100)"
      :dx="getAdjustX(重症)"
    >
      <tspan>{{ 重症 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text
      class="green text"
      transform="translate(256 100)"
      :dx="getAdjustX(死亡)"
    >
      <tspan>{{ 死亡 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text
      class="green text"
      transform="translate(304 100)"
      :dx="getAdjustX(退院)"
    >
      <tspan>{{ 退院 }}</tspan>
      <tspan class="unit" dx="-3">人</tspan>
    </text>
    <text x="256" y="86" fill="#009a5a" font-size="10" font-weight="500">
        死亡
    </text>
  </svg>
</template>

<script>
export default {
  props: [
    '検査実施人数',
    '陽性物数',
    '入院中',
    '軽症中等症',
    '重症',
    '死亡',
    '退院'
  ],
  methods: {
    /** 桁数に応じて位置の調整をする */
    getAdjustX(input) {
      const length = input.toString(10).length
      switch (length) {
        case 1: {
          return 3
        }
        case 2: {
          return 0
        }
        case 3: {
          return -3
        }
        case 4: {
          return -8
        }
        default: {
          return 0
        }
      }
    },
    /** グラフ内容がわかる支援技術用テキストの中身を取得する **/
    ariaLabel(
      inspected,
      positive,
      hospitalized,
      mild,
      critically,
      deceased,
      discharged
    ) {
      const ariaLabel = `検査陽性者の状況: 検査実施人数は${inspected}人、うち累積の陽性者数は${positive}人です。入院中は${hospitalized}人で、うち軽症・中等症は${mild}人、また重症は${critically}人です。さらに死亡は${deceased}人、退院は${discharged}人です。`
      return ariaLabel
    }
  }
}
</script>

<style lang="scss" scoped>
.confirmed-cases-table {
  .black {
    fill: #4d4d4d;
  }
  .green {
    fill: #009a5a;
  }
  .text {
    font-size: 13px;
    font-weight: bold;
  }
  .unit {
    font-size: 10px;
  }
}
</style>
