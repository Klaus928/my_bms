import type { App } from 'vue'
import { createPinia, defineStore } from 'pinia'
const store = createPinia()

export const loginState = defineStore('login', {
  state() {
    return {
      count: 1
    }
  }
})
export function setupStore(app: App<Element>): void {
  app.use(store)
}

export { store }
