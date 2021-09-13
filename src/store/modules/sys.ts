import { defineStore } from 'pinia'
const setting = defineStore('sys', {
  state() {
    return {
      isCollapse: false
    }
  },
  actions: {
    changeIsCollapse(value: boolean) {
      this.isCollapse = value
    }
  }
})
export default setting
