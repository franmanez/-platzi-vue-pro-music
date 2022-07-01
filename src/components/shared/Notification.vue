<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body") Algo anduvo mal 🙁
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
