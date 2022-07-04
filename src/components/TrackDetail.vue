<template lang="pug">
  .container
    .columns
      h1.title {{ getTrackTitle }}
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import PmTrack from '@/components/Track.vue'

export default {
  name: 'TrackDetail',
  components: { PmTrack },

  computed: {
    ...mapState(['track']),
    ...mapGetters(['getTrackTitle'])
  },

  data () {
    return {

    }
  },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          alert('Track loaded')
        })
    }
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss">
  .column {
    margin: 20px;
  }
</style>
