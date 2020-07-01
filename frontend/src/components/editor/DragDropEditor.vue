<template>
    <div>
        <div class="dragElementsContainer">
            <drag class="drag" @dragover="coordCons"  :transfer-data="{ example: 'minimal' }" :tag ='none'>Text Tag</drag>
            <drag class="drag" @dragover="coordCons"  :transfer-data="{ example: 'simple' }" :tag ='none'>Image Tag</drag>
        </div>
        <DropElement v-for="(position, index) in order" :key="index"/>
       </div>
</template>


<script lang="js">
  import DropElement from '@/components/editor/DropElement';

export default {
  name: "DragDropEditor",
    components: {
      DropElement,
  },

  props: {
   order: {type: Array, required: true},
   ratio: {type: Number, default: 1.0, required: false},
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
      return  this.$store.state.scaleLength  + 'px'
    },

    scrollParallaxLayerPositionOne() {
       return this.$store.state.scrollerOffset
     },

    scrollParallaxLayerPositionSecond() {
       return this.$store.state.scrollerOffset*0.77
     },
     
  },

  methods: {
    coordCons(data, nativeEvent) {
        console.log(nativeEvent)
      },
    },
}
</script>

<style lang="scss">

.drag {
	box-sizing: border-box;
	display: inline-block;
	border-radius: 10px;
	width: 4vw;
	height: 10vh;
	background: #ccc;
	vertical-align: middle;
	margin-right: 20px;
	position: relative;
	padding: 5px;
	padding-top: 35px;
	text-align: center;
	margin: 3px;
}

.dragElementsContainer {
  width: 20vw;
  height: 20vh;
  position: fixed;
  top: 5vh;
  left: 3vw;
  outline: maroon dotted 1px;
  z-index: 10;
  display: flex;
}
</style>