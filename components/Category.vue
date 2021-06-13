<template>
  <v-list-group
    v-if="firstRequest || memos.length > 0"
    v-model="showMemos"
    :disabled="firstRequest"
    @click.native="updateCategoryId"
  >
    <template v-slot:activator>
      <v-list-item-title class="black--text">{{
        category.name
      }}</v-list-item-title>
    </template>
    <memo v-for="(item, index) in memos" :key="index" :memo="item" />
  </v-list-group>
  <v-list-group v-else v-model="showMemos" @click.native="updateCategoryId">
    <template v-slot:activator>
      <v-list-item-title class="black--text">{{
        category.name
      }}</v-list-item-title>
    </template>
  </v-list-group>
</template>

<script>
import Memo from "~/components/Memo.vue";
export default {
  props: ["category"],
  components: {
    Memo
  },
  data() {
    return {
      memos: [],
      showMemos: false,
      firstRequest: true
    };
  },
  methods: {
    async updateCategoryId() {
      if (this.firstRequest) {
        const memos = await this.$memoApi.getMemos(this.category.id);
        this.firstRequest = false;
        this.memos = memos;
        this.showMemos = true;
      }
      this.$emit(
        "activeCategoryIdChanged",
        this.showMemos ? this.category.id : null
      );
    }
  }
};
</script>
