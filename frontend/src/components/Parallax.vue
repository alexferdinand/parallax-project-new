<template>
  <main class="parallax-container" id = "parallax-container" >
    <TagLayer :order="1" />
    <ParallaxLayer :order="2" :startDate="1050" :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
    <ParallaxLayer :order="1" :startDate="1050" :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
    
  </main>
</template>


<script lang="js">
  import ParallaxLayer from '@/components/ParallaxLayer'
  import TagLayer from '@/components/TagLayer'

  
export default {
  name: "Parallax",
    components: {
    ParallaxLayer,
    TagLayer,
  },
  data() {
    return {
      scale: {},
      scaleLength: 0,
      offsetParallax: 0,
      tagsData: null,
      startDate: 2141,
      endDate: 4228
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

    handleDrop(data) {
				alert(`You dropped with data: ${JSON.stringify(data)}`);
      },
          coordCons(data, nativeEvent) {
        console.log(nativeEvent)
      },

    }
}
</script>

<style lang="scss">
.parallax-container {
  min-width: 100%;
}

.parallax-layer {
  height: 30%;
  min-width: 100%;
  display: flex;
  align-items: flex-end;
  justify-items: center;
}

.parallax_container_level-1 {
  position: fixed;
  left:0;
  top: 70%;
}

.parallax_container_level-2 {
  position: fixed;
  left:0;
  top:40%;
}

.parallax-layer-2 {
  background-image: url("../images/skale.svg");
  background-size: cover;
}

.parallax-layer-1 {
  background-image: url("../images/skale2.svg");
  background-size: cover;
  box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.5);
}

</style>