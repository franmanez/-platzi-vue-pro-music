<template lang="pug">
  .content(v-if="track && track.album")
    .p.is-128x128
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small {{ track.duration_ms }}
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Player',
  data () {
    return {
      track: {}
    }
  },

  created () {
    // En este caso usamos el evento $on que nos permite escuchar el evento emitido por $emit (en este caso desde Track.vue)
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 60%;
}
</style>
