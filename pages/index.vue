<template>
  <div class="memo-app">
    <login />
    <div v-if="!isLogin">
      <v-col class="text-center pa-15">
        <v-alert type="info" color="blue lighten-2">
          enter d3aa88e2-c754-41e0-8ba6-4198a34aa0a2 to login
        </v-alert>
      </v-col>
    </div>
    <div class="memo-container" v-if="isLogin">
      <v-row class="mb-6" no-gutters>
        <v-col lg="3" md="3" sm="3">
          <!-- <v-card class="pa-2" noline tile :elevation="n - 1"> col-1 </v-card> -->
          <v-card class="pa-2" elevation="0">
            <categories />
          </v-card>
        </v-col>
        <v-col lg="9" md="9" sm="9">
          <v-card class="pa-2" elevation="0">
            <memo-editor></memo-editor>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Login from "~/components/Login.vue";
import Categories from "~/components/Categories.vue";
import MemoEditor from "~/components/MemoEditor.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Login,
    Categories,
    MemoEditor
  },
  computed: {
    ...mapState("user", ["isLogin"])
  },
  methods: {
    ...mapMutations("user", ["userLogin"]),
    ...mapMutations("memo", ["updateCategories"])
  },
  async created() {
    const token = this.$token.get();
    if (token) {
      // vuex user login
      this.userLogin();
      // fetch categories when login
      const categories = await this.$memoApi.getCategories();
      this.updateCategories(categories);
    }
  }
};
</script>
