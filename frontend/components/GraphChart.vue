<template>
  <client-only>
    <v-chart class="w-full" :option="option" autoresize />
  </client-only>
</template>


<script lang="ts" setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GraphChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

interface Props {
  data: { name: string; x: number; y: number; symbolSize: number, symbol?: string }[];
  links: { source: string; target: string }[];
}

const { data, links } = defineProps<Props>();

const option = ref({
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      type: "graph",
      layout: "none",
      symbolSize: 50,
      roam: false,
      label: {
        show: true,
      },
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20,
      },
      itemStyle: {
        color: "#5577FF",
      },

      data,
      links,
      lineStyle: {
        color: '#5577FF',
        opacity: 0.9,
        width: 2,
        curveness: 0.3,
      },
    },
  ],
});
</script>