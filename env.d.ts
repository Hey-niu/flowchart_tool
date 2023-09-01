/// <reference types="vite/client" />
declare module "*.vue" {
    import { DefineComponent } from Vue
    const component: DefineComponent<{}, {}, any>
    export default component
}
