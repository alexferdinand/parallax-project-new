<template>
<div id="app" @wheel.prevent="wheelScrolling" @keydown.shift.left.prevent="keyHandler" @keydown.shift.right.prevent="keyHandler" tabindex="0" v-focus>
    <router-view/>
    <scroller />
</div>
</template>


<script lang="js">
 import Scroller from '@/components/Scroller'

export default {
  name: "App",
  components: {
    Scroller,
  },

  data () {
      return {
          offsetValue: this.$store.state.wheelOffsetValue,
          scrollDelta: this.$store.state.wheelOffsetValue
      }
  },

  methods: {
    wheelScrolling(event) {
        console.log(this.deltaValue(event.deltaY))
          this.$root.$emit('wheelScrolling', this.deltaValue(event.deltaY))
      },

    deltaValue(delta) {
        return delta < 0 ? -this.offsetValue : this.offsetValue;
    },

    keyHandler(event) {
                if (event.repeat) {
                    this.scrollDelta += 5;
                } else
                {
                    this.scrollDelta = this.$store.state.wheelOffsetValue
                }
                this.$root.$emit('wheelScrolling', this.deltaValue(event.key === "ArrowRight" ? this.scrollDelta : -this.scrollDelta))
            },
  },

  directives: {
            focus: {
                inserted(el) {
                    el.focus()
                }
            }
        }

}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        height: 100%;
        width: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
    }

</style>