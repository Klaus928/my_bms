import { defineStore } from 'pinia'
const setting = defineStore('sys', {
  state() {
    return {
      isCollapse: false
    }
  },
  actions: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
export default setting
