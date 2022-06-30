<!--div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div-->
<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        div.container
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
        .container.results
          .columns
            .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Pies descalzos', artist: 'Shakira' },
  { name: 'Soldadito marinero', artist: 'Fito' }
]

export default {
  name: 'App',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
  },

  methods: {
    search () {
      this.tracks = tracks
    }
  },

  components: {
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>
