<template lang="pug">
  section.hero.is-primary.is-medium
    .hero-head
      .navbar
        .nav-left
          .navbar-item
            strong Platzi Music
        .nav-right.nav-menu
          router-link.nav-item(:to="{ name: 'search' }") Buscar
          router-link.nav-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Las mejores canciones
        pm-player
</template>

<script>

import PmPlayer from '@/components/Player.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    PmPlayer
  }
}
</script>
