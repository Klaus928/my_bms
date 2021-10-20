import { defineStore } from 'pinia'
const setting = defineStore('sys', {
  state() {
    return {
      isCollapse: false,
      activeIndex: '',
      screenWidth: 1920
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
    },
    changeScreenWidth(value) {
      this.screenWidth = value
    }
  }
})
export default setting
