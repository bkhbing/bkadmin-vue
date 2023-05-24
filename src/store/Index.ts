import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => ({ isCollapse: false }),
    getters: {
      double: (state) => state.isCollapse,
    },
    actions: {
      changeIsCollapse() {
        this.isCollapse = !this.isCollapse
      },
    },
})