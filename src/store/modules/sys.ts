import { defineStore } from 'pinia'
const setting = defineStore('sys', {
  state() {
    return {
      isCollapse: false,
      activeIndex: ''
    }
  },
  actions: {
    // toggle
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
    },
    changeCollapse(value: boolean) {
      this.isCollapse = value
    },
    changeActiveIndex(value) {
      this.activeIndex = value
    }
  }
})
export default setting
