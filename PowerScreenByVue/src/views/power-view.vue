<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top"><PieEcharts :echarts-datas="pieData" /></div>
    <div class="left-bottom"><LineEcharts :echarts-datas="lineData" /></div>

    <div class="right-top"><RightTopPanel /></div>
    <div class="right-center"><barEcharts :echarts-datas="barData" /></div>
    <div class="right-bottom">
      <RightBottomSvg :dots="exceptionMonitoring" />
    </div>

    <div class="center"><CenterSvgVue /></div>
    <div class="bottom"><BottomPanel :panel-items="dataAnalysis" /></div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import PieEcharts from "../components/pie-echarts.vue";
import LineEcharts from "../components/line-echarts.vue";
import barEcharts from "../components/bar-echarts.vue";
import RightBottomSvg from "../components/right-bottom-svg.vue";
import CenterSvgVue from "../components/center-svg.vue";
import BottomPanel from "../components/bottom-panel.vue";
// import WaterBall from "../components/water-ball.vue";
import RightTopPanel from '../components/right-top-panel.vue'
import {
  charginPieData,
  charginLineData,
  barLineData,
  exceptionMonitoringData,
  dataAnalysisData
} from "./config/home-data";
import { getPowerScreenData } from "@/services";

const pieData = ref(charginPieData);
const lineData = ref(charginLineData);
const barData = ref(barLineData);
const exceptionMonitoring = ref(exceptionMonitoringData);
const dataAnalysis = ref(dataAnalysisData);

getPowerScreenData().then((res) => {
  console.log(res.data);
  pieData.value = res.data.chargingPile.data;
  lineData.value = res.data.processMonitoring.data;
  barData.value = res.data.chargingStatistics.data;
  exceptionMonitoring.value = res.data.exceptionMonitoring.data;
  dataAnalysis.value = res.data.dataAnalysis.data;
});
</script>

<style lang="scss" scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-color: #070a3c;
  background-image: url(../assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;

  /* 背景 */
  background-image: url(../assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.center {
  position: absolute;
  right: 525px;
  bottom: 272px;
  width: 823px;
  height: 710px;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
