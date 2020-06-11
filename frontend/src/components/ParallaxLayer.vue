<template>
    <div class="parallax-layer" v-bind:class="classObject" :style="{width: parallaxLayerFullWidth, left: scrollParallaxLayerPosition + 'px'}" >
     <scale
        :startDate=startDate
        :endDate=endDate
        :step=step
        :ratio=ratio
        :order=order
      />
    </div>
</template>


<script lang="js">
  import Scale from '@/components/Scale'
  
export default {
  name: "ParallaxLayer",
    components: {
    Scale,
  },

  props: {
   order: {type: Number, required: true},
   step: {type: Number, default: 1, required: false},
   startDate: {type: Number, required: true},
   endDate: {type: Number, required: true},
   ratio: {type: Number, default: 1.0, required: false},
   subscript: {type: String, default: 'year', required: false},
        },

  data() {
    return {
      }
  },
  
  created() {
    //this.getData()
  },

  computed: {
    parallaxLayerFullWidth: function () {
      return  this.$store.state.scaleLength + 100 + 'px'
    },

    scrollParallaxLayerPosition() {
       return this.$store.state.scrollerOffset*(1/this.order)
     },
     
    classObject: function () {
      return {
      [`parallax_container_level-${this.order}`]: true,
      [`parallax-layer-${this.order}`]: true
      }
  }
  },

  methods: {


    },
}
</script>

<style lang="scss">

</style>