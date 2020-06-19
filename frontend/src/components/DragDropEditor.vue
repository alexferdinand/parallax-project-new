<template>
    <div>
        <div class="dragElementsContainer">
             <drag class="drag" @dragover="coordCons"  :transfer-data="{ example: 'minimal' }">Text Tag</drag>
            <drag class="drag" @dragover="coordCons"  :transfer-data="{ example: 'simple' }">Image Tag</drag>
        </div>
        <drop class="drop"  @drop="handleDrop"  @dragover="coordCons" :transfer-data="{ example: 'dfdfdfgf' }"/>
        <drop class="drop"  @drop="handleDrop"  @dragover="coordCons" :transfer-data="{ example: 'minimal' }"/>
    </div>

</template>


<script lang="js">
  import Scale from '@/components/Scale'
  
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

    },
}
</script>

<style lang="scss">
.drop {
  position: fixed;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  width: 500px;
  height: 30vh;

  background-color: salmon;
  opacity: 0.5;
}

.drag {
	box-sizing: border-box;
	display: inline-block;
	border-radius: 10px;
	width: 100px;
	height: 100px;
	background: #ccc;
	vertical-align: middle;
	margin-right: 20px;
	position: relative;
	padding: 5px;
	padding-top: 35px;
	text-align: center;
	margin: 3px;
}
</style>