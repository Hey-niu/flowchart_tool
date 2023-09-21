<!--
 * @LastEditors: v-bianjunping
 * @LastEditTime: 2023-09-05 15:35:52
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LogicFlow from '@logicflow/core';
import { TopicNodeModel, TopicNodeView } from '@/components/customNode/TopicNode.tsx'
import ChartPanel, { type PanelItem,  type ListenerType, watchEventListener } from '@/components/ChartPanel/index'
const lf = ref<LogicFlow | null>(null)

onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector('#container') as HTMLElement,
    stopScrollGraph: true,
    stopZoomGraph: true,
    grid: {
      type: 'dot',
      size: 20,
    },
  })
  watchEventListener(lf.value as LogicFlow, ({ data, e }) => {
    console.log(data, e);
    
  })
  // 注册自定义标题节点
  lf.value.register({
    type: 'topicNodeType',
    view: TopicNodeView,
    model: TopicNodeModel,
  });
  lf.value.render()
})
const mouseDownHandle = function(panelItem: PanelItem): void {
  console.log(panelItem);
  
  if (lf.value)
    lf.value.dnd.startDrag(panelItem)
}
</script>

<template>
  <div class="container-box">
    <ChartPanel @mouseDownHandle="mouseDownHandle" />
    <div id="container"></div>
  </div>
</template>
<style lang="scss">
.container-box{
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  #container {
    flex: 1;
    margin-left: 20px;
  }
}
.panel-box {
  width: 160px;
  height: 100%;
  background: #ccc;
}
.panel-item {
  position: relative;
  text-align: center;
  padding: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &-rect{
    margin: 0 auto;
    width: 30px;
    height: 30px;
    border: 1px solid red;
  }
  &-circle{
    margin: 0 auto;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    border-radius: 50%;
  }
}
</style>
