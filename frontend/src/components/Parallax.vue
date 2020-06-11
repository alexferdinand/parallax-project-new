<template>
  <main class="parallax-container" id = "parallax-container" >
    <TagLayer :transmittedWidth="parallaxLayerFullWidth" :offsetParallax="offsetParallax" :order="1" />
    <ParallaxLayer :order="2" :startDate="2010" :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
    <ParallaxLayer :order="1" :startDate="2010" :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
<!-- <editor/> -->
  </main>
</template>


<script lang="js">
  import ParallaxLayer from '@/components/ParallaxLayer'
  //import Editor from '@/components/Editor'
  
export default {
  name: "Parallax",
    components: {
    ParallaxLayer,
    //TagLayer,
    //Editor
  },
  data() {
    return {
      scale: {},
      scaleLength: 0,
      offsetParallax: 0,
      tagsData: null
      }
  },
  created() {
    //this.getData()
  },
  computed: {

  },

  methods: {
    controlOfLeftPosition(position) {
      return position >= 0 ?  0 : position
    },

    getScrollLength(length) {
      this.scaleLength = length + 100
    },

    }
}
</script>

<style lang="scss">
.parallax-container {
  min-width: 100%;
}

</style>