<template>
  <div
    class="memo-editor"
    v-if="
      (memoEditType === 'update' && activeMemoId && memo) ||
        memoEditType === 'add'
    "
  >
    <v-text-field v-model="memo.title" label="title" required></v-text-field>
    <v-textarea
      name="content"
      label="content"
      v-model="memo.content"
    ></v-textarea>
    <v-col class="text-right">
      <template v-if="memoEditType === 'update'">
        <v-btn color="success" :disabled="!canOperateMemo" @click="updateMemo"
          >Update</v-btn
        >
        <v-btn color="error" @click="deleteMemo"
          >Delete</v-btn
        >
      </template>
      <template>
        <v-btn
          color="success"
          :disabled="!canOperateMemo"
          @click="addMemo"
          v-if="memoEditType === 'add'"
          >Add</v-btn
        >
      </template>
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      memo: {
        content: "",
        title: "",
        category_id: "",
        id: ""
      }
    };
  },
  computed: {
    ...mapState("memo", ["activeMemoId", "memoEditType", "activeCategoryId"]),
    canOperateMemo() {
      return this.memo.content.trim() !== "" && this.memo.title.trim() !== "";
    }
  },
  watch: {
    async activeMemoId(val) {
      if (val) {
        this.memo = await this.$memoApi.getMemo(val);
      } else {
        this.memo = {
          content: "",
          title: "",
          category_id: "",
          id: ""
        };
      }
    }
  },
  methods: {
    async addMemo() {
      this.memo.category_id = this.activeCategoryId;
      await this.$memoApi.addMemo(this.memo);
      this.$notifier.showMessage({
        content: "Add memo successfully",
        color: "success"
      });
    },
    async updateMemo() {
      await this.$memoApi.updateMemo(this.memo);
      this.$notifier.showMessage({
        content: "Update memo successfully",
        color: "success"
      });
    },
    async deleteMemo() {
      await this.$memoApi.deleteMemo(this.memo.id);
      this.$notifier.showMessage({
        content: "Delete memo successfully",
        color: "success"
      });
    }
  }
};
</script>
