<!--div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div-->
<template lang="pug">
  #app
    pm-header

    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            //- comunicación PADRE-HIJO: :tract="t"
            pm-track(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )

    pm-footer
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import trackService from '@/services/track'

import PmFooter from './components/layout/Footer'
import PmHeader from './components/layout/Header'

import PmTrack from '@/components/Track.vue'

import PmNotification from '@/components/shared/Notification.vue'
import PmLoader from '@/components/shared/Loader.vue'

/* const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Pies descalzos', artist: 'Shakira' },
  { name: 'Soldadito marinero', artist: 'Fito' }
] */

export default {
  name: 'App',

  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader,
    PmNotification
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      // comunicación HIJO-PADRE
      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification: function () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      this.isLoading = true
      // this.tracks = tracks
      if (!this.searchQuery) return
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          console.log(res)
          this.isLoading = false
        })
    },

    // comunicación HIJO-PADRE
    setSelectedTrack (id) {
      this.selectedTrack = id
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
