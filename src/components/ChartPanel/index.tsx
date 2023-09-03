import { reactive, renderList, defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import type { Events, PanelItem } from './type'
export default defineComponent({
  setup(props: {}, context: SetupContext<Events>) {
    const menu = reactive<PanelItem[]>([
      {
        type: 'rect',
        text: '矩形'
      }, {
        type: 'circle',
        text: '圆形'
      }
    ])
    const tmouseDown = ({ type, text }: PanelItem) => {
      context.emit('mouseDownHandle', { type, text })
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