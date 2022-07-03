<!--div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div-->
<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import PmFooter from './components/layout/Footer'
import PmHeader from './components/layout/Header'

/* const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Pies descalzos', artist: 'Shakira' },
  { name: 'Soldadito marinero', artist: 'Fito' }
] */

export default {
  name: 'App',

  components: {
    PmFooter,
    PmHeader
  },

  data () {
    return {
    }
  }

}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
