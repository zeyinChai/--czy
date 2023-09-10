<template>
  <div
    ref="divRef"
    class="home"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, watch } from "vue";
import useEcharts from "../hooks/useEcharts";
const props = defineProps({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  echartsDatas: {
    type: Array,
    default: () => {
      return [];
    }
  }
});
let divRef = ref(null);
onMounted(() => {
  setupEchart(props.echartsDatas);
});
watch(
  () => props.echartsDatas,
  (newVal) => {
    setupEchart(newVal);
  }
);
let myChart:any = null
function setupEchart(echartsDatas) {
  if (!myChart) {
    myChart = useEcharts(divRef.value);
  }
  const option = getOption(echartsDatas);
  myChart.setOption(option);
}

function getOption(echartsDatas) {
  let category = echartsDatas.map((item)=>{
    return item.name
  })
  let categoryData = echartsDatas.map((item)=>{
    return item.value
  })
  var option = {
    grid: {
      left: "5%",
      right: "5%",
      top: "30%",
      bottom: "5%",
      containLabel: true // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF"
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "white"
      },

      data: category
    },
    yAxis: {
      name: "个",
      nameTextStyle: {
        color: "white",
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF"
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF"
        }
      },
      axisLabel: {
        color: "white"
      }
    },
    series: [
      {
        name: "销量",
        type: "bar",
        barWidth: 17,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#01B1FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#033BFF" // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        data: categoryData
      }
    ]
  };
  return option;
}
</script>

<style lang="scss" scoped></style>
