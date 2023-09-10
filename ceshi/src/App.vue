<template>
  <div>
    <div class="box">123</div>
    <div class="main" ref="divEl"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const divEl = ref(null);
console.log(divEl);
onMounted(() => {
  const echartsInstance = echarts.init(divEl.value, null, { renderer: "svg" });
  echartsInstance.setOption({
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
  // 响应式图表
  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });
});
</script>

<style scoped>
.box {
  font-size: 80px;
  width: 500px;
  height: 200px;
  background-color: palegoldenrod;
}
.main {
  width: 800px;
  height: 800px;
}
</style>
