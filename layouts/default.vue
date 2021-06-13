<template>
  <v-app>
    <v-main>
      <nuxt />
      <snackbar />
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from "~/components/Snackbar";
export default {
  data() {
    return {};
  },
  components: {
    Snackbar
  }
};
</script>
