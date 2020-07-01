<template>
    <div>
        <drop class="drop" v-bind:class="dropClass" @drop="handleDrop" @dragover="coordCons" :transfer-data="{ example: 'dfdfdfgf' }" :tag ='none' :style="{width: parallaxLayerFullWidth, left: scrollParallaxLayerPositionSecond + 'px'}"/>
    </div>
</template>


<script lang="js">

export default {
  name: "DropElement",
    components: {

  },

  props: {
   order: {type: Number, required: true},
   ratio: {type: Number, default: 1.0, required: false},
        },

  data() {
    return {
      }
  },
  
  created() {
  },

  computed: {
    parallaxLayerFullWidth: function () {
      return  this.$store.state.scaleLength  + 'px'
    },

    scrollParallaxLayerPositionOne() {
       return this.$store.state.scrollerOffset
     },

    scrollParallaxLayerPositionSecond() {
       return this.$store.state.scrollerOffset*0.77
     },

    dropClass: function () {
      return {
      [`drop-layer-${this.order}`]: true,
      }
  }
  },

  methods: {
    handleDrop(data) {
    alert(`You dropped with data: ${JSON.stringify(data)}`);
      },
    coordCons(data, nativeEvent) {
        console.log(nativeEvent)
      },
      // unvisible() {
      //   console.log(this.$refs)
      //   this.$refs.dragEl.$el.style.display ="none"
      // }

    },
}
</script>

<style lang="scss">
.drop {
  position: fixed;
  box-sizing: border-box;
  display: inline-block;
  height: 30vh;
  z-index: 10;
  background-color: salmon;
  opacity: 0.5;
  left:0;
}

.drop-layer-1 {
  top:40%;
}

.drop-layer-2 {
  top:70%;
}

</style>