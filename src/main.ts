import { createSSRApp } from "vue"
import uviewPlus, { setConfig } from "uview-plus"
import App from "./App.vue"

setConfig({
  config: {
    unit: "rpx"
  },
  props: {
    input: {
      placeholderClass: "placeholder"
    }
    // radio: {
    //   size: 15
    // }
  }
})
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
