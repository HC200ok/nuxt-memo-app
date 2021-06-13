<template>
  <v-list-item-content>
    <v-list-item-title
      :class="[memo.id === activeMemoId ? 'blue--text' : 'black--text']"
      class="text-right pr-6 memo"
      @click="updateMemo(memo.id)"
      >{{ memo.title }}</v-list-item-title
    >
  </v-list-item-content>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["memo"],
  computed: {
    ...mapState("memo", ["activeMemoId"]),
  },
  methods: {
    ...mapMutations("memo", ["updateActiveMemoId", "updateMemoEditType"]),
    updateMemo(memoId) {
        this.updateActiveMemoId(memoId)
        this.updateMemoEditType("update")
    }
  }
};
</script>

<style scoped>
.memo {
  cursor: pointer;
}
</style>
