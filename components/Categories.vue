<template>
  <v-card class="mx-auto" width="300" v-if="categories.length">
    <v-list>
      <category
        v-for="(item, index) in categories"
        :key="index"
        :category="item"
        @activeCategoryIdChanged="activeCategoryIdChanged"
      />
    </v-list>
    <v-col class="text-right">
      <v-btn :disabled="!activeCategoryId" @click="startAddingMemo">New</v-btn>
    </v-col>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Category from "./Category.vue";
export default {
  components: { Category },
  data() {
    return {
      activeCategoryId: null
    };
  },
  computed: {
    ...mapState("memo", ["categories"])
  },
  methods: {
    ...mapMutations("memo", ["updateActiveCategoryId", "updateMemoEditType", "updateActiveMemoId"]),
    activeCategoryIdChanged(val) {
      this.activeCategoryId = val;
    },
    startAddingMemo() {
      this.updateActiveCategoryId(this.activeCategoryId);
      this.updateMemoEditType("add");
      this.updateActiveMemoId(null);
    }
  }
};
</script>
