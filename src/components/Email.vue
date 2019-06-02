<template>
  <v-container>
    <v-layout column>Send an email</v-layout>
  </v-container>
</template>

<script>
export default {
  name: "email",
  components: {}
};
</script>

<style lang="stylus" scoped>
.container {
  @media only screen and (min-width: 1264px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 960px) {
    max-width: 800px;
  }
}
</style>