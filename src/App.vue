<!--div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div-->
<template lang="pug">
  #app
    p {{ msg }}
    input(v-model="name")
    input(v-model="lastName")
    p {{ fullName }}

    button(v-on:click="format") Format
    p {{ formattedName }}

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Hola',
      name: '',
      lastName: '',
      formattedName: ''
    }
  },

  computed: {
    fullName () {
      return this.name + ' ' + this.lastName
    }
  },

  watch: {
    name () {
      console.log(this.name)
    }
  },

  methods: {
    format () {
      this.formattedName = this.name.split(' ').join('-').toUpperCase()
    }
  },

  components: {
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
