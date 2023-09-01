<script setup lang="ts">
import { onMounted } from 'vue'
import LogicFlow from '@logicflow/core';
const data = {
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    }
  ] ,
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
}
onMounted(() => {
  const ele: HTMLElement | null = document.querySelector('#container')
  if (ele) {
    const lf = new LogicFlow({
      container: ele,
      stopScrollGraph: true,
      stopZoomGraph: true,
      width: 500,
      height: 500,
      grid: {
        type: 'dot',
        size: 20,
      },
    })
    lf.render(data)
  }
})
</script>

<template>
  <div id="container"></div>
</template>
<style>
#container {
  width: 100%;
  height: 100%;
}
</style>
