export interface PanelItem {
  type: string,
  text: string
}
export interface Events {
  mouseDownHandle(panelItem: PanelItem): void
}