import { RectNode, RectNodeModel } from '@logicflow/core'

// 自定义节点的 model
class TopicNodeModel extends RectNodeModel {
  setAttributes(): void {
    this.menu = [
      {
        text: '主题',
        
      }
    ]
  }
}
// 自定义节点的 view
class TopicNodeView extends RectNode {}

export { TopicNodeModel, TopicNodeView }
