import { onUnmounted } from "vue";
import * as echarts from "echarts";

export default function useEcharts(divEl) {
  const echartsInstance = echarts.init(divEl, null, { renderer: "svg" });

  onUnmounted(() => {
    echartsInstance.dispose(); // 销毁实例
  });

  function setOption(option) {
    echartsInstance.setOption(option);
  }
  function resizeEchart() {
    echartsInstance.resize();
  }

  return {
    echartsInstance,
    setOption,
    resizeEchart
  };
}
