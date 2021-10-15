import { defineStore } from 'pinia'
const setting = defineStore('sys', {
  state() {
    return {
      isCollapse: false,
      activeIndex: ''
    }
  },
  actions: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
    },
    changeActiveIndex(value) {
      this.activeIndex = value
    }
  }
})
export default setting
