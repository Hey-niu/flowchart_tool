export type PanelItem = {
  id?: string
  type: string,
  text: string,
  properties: Record<string, unknown>
}
export type Events = {
  mouseDownHandle(panelItem: PanelItem): void
}

export type ListenerType = {
  data: PanelItem;
  e: PanelItem
}