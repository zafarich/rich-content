<template>
  <div>
    <div class="loading" :style="loadingStyle">
      <div class="progress text-[#333]">{{ progress }}%</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle
          fill="transparent"
          cx="50"
          cy="50"
          r="40"
          :stroke-width="thickness"
          stroke-dasharray="251.3272"
          stroke-dashoffset="0"
          class="underlay"
        ></circle>
        <circle
          fill="transparent"
          cx="50"
          cy="50"
          r="40"
          :stroke-width="thickness"
          stroke-dasharray="251.3272"
          :stroke-dashoffset="dashOffset"
          stroke-linecap="round"
          :style="{ stroke: color }"
          class="overlay"
        ></circle>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

const props = defineProps({ progress: { type: Number, default: 10 } });

const dashOffset = ref(0);
const color = ref("rgb(251 193 0)");
const size = ref(100);
const thickness = ref(5);

const loadingStyle = {
  width: `${size.value}px`,
  height: `${size.value}px`,
};

watchEffect(() => {
  dashOffset.value = map(props.progress, 0, 100, 251.3272, 0);
});

function map(val, originMin, originMax, targetMin, targetMax) {
  return (
    ((val - originMin) * (targetMax - targetMin)) / (originMax - originMin) +
    targetMin
  );
}
</script>

<style scoped>
.loading {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}
.loading .progress {
  font-size: 18px;
  font-weight: bold;
}
.loading svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  animation-name: rotate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.loading svg .underlay {
  stroke: rgba(158, 158, 158, 0.4);
  z-index: 1;
}
.loading svg .overlay {
  stroke: #000;
  z-index: 2;
  transition: all 0.6s ease-in-out;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
