import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgSource: '',
    wheelOffsetValue: 10,
    wheelScrollOffset: 0,
    scaleLength: 0,
    scrollerOffset: 0,
  },

  mutations: {
    // wheelScrollingDetect(state, payload)
    // {
    //   state.wheelScrollOffset = payload < 0 ? -state.wheelOffsetValue : state.wheelOffsetValue;
    //   console.log(state.wheelScrollOffset, payload)
    // },

    setScaleLength(state, scaleWidth) {
      state.scaleLength =  scaleWidth
    },

    setScrollerOffset(state, position) {
      state.scrollerOffset = position
    },

  },

  actions: {
  },

  modules: {
  }
})
