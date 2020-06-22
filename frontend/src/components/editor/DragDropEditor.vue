<template>
    <div>
        <div class="dragElementsContainer">
            <drag class="drag" @dragover="coordCons" @dragstart="unvisible" ref="dragEl" :effect-allowed="['move']"  :transfer-data="{ example: 'minimal' }" :tag ='none'>Text Tag</drag>
            <drag class="drag" @dragover="coordCons"  :transfer-data="{ example: 'simple' }" :tag ='none'>Image Tag</drag>
        </div>
        <drop class="drop drop-layer-1"  @drop="handleDrop"  @dragover="coordCons" :transfer-data="{ example: 'dfdfdfgf' }" :tag ='none' :style="{width: parallaxLayerFullWidth, left: scrollParallaxLayerPosition + 'px'}"/>
        <drop class="drop drop-layer-2"  @drop="handleDrop"  @dragover="coordCons" :transfer-data="{ example: 'minimal' }" :tag ='none' :style="{width: parallaxLayerFullWidth, left: scrollParallaxLayerPosition + 'px'}"/>
    </div>
</template>


<script lang="js">

export default {
  name: "DragDropEditor",
    components: {
 
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