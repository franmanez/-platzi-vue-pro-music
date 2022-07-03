<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(:src="track.album.images[0].url")
          .media-content
            p.title.is-4
              strong {{ track.name }}
            p.subtitle.is-6 {{ track.artists[0].name}}
        .content
          small {{ track.duration_ms }}
           nav.level
            .level-left
              a.level-item
                span.icon.is-small(@click="selectTrack") ▶️
              a.level-item
                span.icon.is-small(@click="goToTrack(track.id)") Detail️
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Track',
  // comunicación PADRE-HIJO
  props: {
    track: {
      type: Object,
      required: true
    }
  },

  methods: {
    // comunicación HIJO-PADRE
    selectTrack () {
      this.$emit('select', this.track.id)

      // Envia el track al player.
      // Es una comunicación entre componentes no relacionados, por lo tanto usamos el plugin bus que hemos creado
      // En bus tenemos otra instancia de VUE, por lo tanto usamos el $emit dentro de $buss
      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>
