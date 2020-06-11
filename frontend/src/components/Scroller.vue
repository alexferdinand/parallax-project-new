<template>
  <div class="scroll-container" id="scroll-container" @scroll.prevent="dummyOffset">
    <div class="scroll-dummy" ref="scrollDummy" :style="{width: scrollDummyWidth + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Scroller",
  // props: {
  //   scrollDummyWidth: Number
  // },

  data() {
    return {
      offsetParallax: 0,
      scrollDummyWidth: 0,
      }
  },

  methods: {
    dummyOffset() {
      this.$store.commit(
        "setScrollerOffset",
        this.$refs.scrollDummy.getBoundingClientRect().left
      )
    },
  },

  mounted() {
     this.$root.$on('wheelScrolling', function (delta) {
     document.getElementById('scroll-container').scrollBy({ left: delta, top: 0, behavior: "auto" });
    })
    this.scrollDummyWidth = this.$store.state.scaleLength + 100;
    },
  
  }

</script>

<style scoped>
.scroll-container {
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 0;
  height: 3%;
  width: 100%;
  overflow: auto;
}

.scroll-dummy {
  position: absolute;
  left: 0px;
  height: 100%;
  min-height: 1px;
}
</style>