
import { LogicFlow } from "@logicflow/core"
import { reactive, renderList, defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import type { Events, PanelItem, ListenerType } from './type'
export type { Events, PanelItem, ListenerType }
export const watchEventListener = (lf: LogicFlow, callback: ({ data, e }: ListenerType) => void): LogicFlow => {
  // node 鼠标右击事件
  lf.on("node:contextmenu", ({ data, e }: ListenerType) =>
    callback({ data, e })
  );
  // edge 鼠标右击事件
  lf.on("edge:contextmenu", ({ data, e }: ListenerType) =>
    callback({ data, e })
  );

  return lf
}

export default defineComponent({
  setup(props: {}, context: SetupContext<Events>) {
    const menu = reactive<PanelItem[]>([
      {
        type: 'rect',
        text: '矩形',
        properties: {}
      }, {
        type: 'circle',
        text: '圆形',
        properties: {}
      }
    ])
    const tmouseDown = ({ type, text, properties }: PanelItem) => {
      context.emit('mouseDownHandle', { type, text, properties })
    }
    return () => {
      return (<div class="panel-box">
        {renderList(menu, value => {
          return (
            <div class='panel-item'>
              <div
                class={`panel-item-${value.type}`}
                onMousedown={ () => tmouseDown(value) }
              />
              <span>{value.text}</span>
            </div>
          )
        })}
      </div>)
    }
  }
})