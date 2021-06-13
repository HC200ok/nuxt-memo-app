<template>
  <v-card class="d-flex" color="blue lighten-2" flat tile>
    <v-card class="ml-auto d-flex align-center blue lighten-2" outlined tile>
      <v-text-field
        width="300"
        id="access_token"
        hide-details="auto"
        v-model="token"
        :disabled="inputDisabled"
        class="mt-2 mb-2 mr-2 pa-0 white token-input"
      ></v-text-field>
      <v-btn small id="login" :disabled="buttonDisabled" @click="login"
        >login</v-btn
      >
    </v-card>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      token: null,
      buttonDisabled: true,
      inputDisabled: false
    };
  },
  watch: {
    token(val) {
      this.buttonDisabled = !this.isTokenValid(val);
    }
  },
  methods: {
    ...mapMutations("user", ["userLogin"]),
    ...mapMutations("memo", ["updateCategories"]),
    // ex
    // true: d3aa88e2-c754-41e0-8ba6-4198a34aa0a2
    // false: abc
    isTokenValid(token) {
      return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
        token
      );
    },
    async login() {
      this.buttonDisabled = true;
      this.inputDisabled = true;
      // save token into localstorage
      this.$token.set(this.token);
      // save token into head of $memoApi
      this.$memoApi.setHeader("X-ACCESS-TOKEN", this.token);
      // change isLogin to true in vuex
      this.userLogin();
      // fetch categories when login
      const categories = await this.$memoApi.getCategories();
      this.updateCategories(categories);
    }
  }
};
</script>

<style scoped>
.token-input {
  width: 400px;
}
</style>
