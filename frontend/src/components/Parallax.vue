<template>
  <main class="parallax-container" id = "parallax-container" >
    <TagLayer :order="2" />
    <ParallaxLayer :order="2" :startDate=startDate :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
    <ParallaxLayer :order="1" :startDate=startDate :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
<!-- <editor/> -->
  </main>
</template>


<script lang="js">


  import ParallaxLayer from '@/components/ParallaxLayer'
  import TagLayer from '@/components/TagLayer'
  import axios from 'axios'

  //import Editor from '@/components/Editor'
  
export default {
  name: "Parallax",
    components: {
    ParallaxLayer,
    TagLayer,
    //Editor
  },
  data() {
    return {
      scale: {},
      scaleLength: 0,
      offsetParallax: 0,
      startDate: null,
      tagsData: null
      }
  },
    async created() {
        this.startDate= await this.getData();
        console.log(this.startDate);

    },
  computed: {

  },

  methods: {
      async getData() {
                  await axios.get('/scale/5eb80bee7c213e5d2fa7d46a')
                      .then((response) => {
                          this.startDate = response.data.startDate;
                          console.log(this.startDate);
                      })
                      .catch(error => console.log('error:' + error));
                  return this.startDate
              },
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