<template>
<div class="tag_layer" :class="classObject" :style="{width: TagLayerFullWidth, left:  scrollTagLayerPosition + 'px'}">
   <tag 
             :scaleId="1235"
            :version="1.0"
    >
   </tag>
</div>

</template>
<script>
  import Tag from '@/components/Tag'

 export default {
  name: "TagLayer",
   components: {
     Tag
  },
  props: {
   version: Number,
   offsetParallax: Number,
   order: Number
        },

  data() {
    return {

       }
        },

  computed: {
    TagLayerFullWidth: function () {
      return  this.$store.state.scaleLength + 100 + 'px'
    },

    scrollTagLayerPosition() {
       return this.$store.state.scrollerOffset*(1/this.order)
     },
     
    classObject: function () {
      return {
      [`parallax_container_level-${this.order}`]: true,
      }
  }
  },

  methods: {
 
        },
    }

</script>
<style >
.tag_layer {
  z-index: 10;
  display: flex;
  align-items: flex-end;
  height: 30%;
}


</style>

