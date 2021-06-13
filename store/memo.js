export const state = () => ({
  activeMemoId: null,
  activeCategoryId: null,
  categories: [],
  memoEditType: "update"
});

export const mutations = {
  updateActiveMemoId(state, memoId) {
    state.activeMemoId = memoId;
  },
  updateActiveCategoryId(state, categoryId) {
    state.activeCategoryId = categoryId;
  },
  updateCategories(state, categories) {
    state.categories = categories;
  },
  updateMemoEditType(state, type) {
    state.memoEditType = type;
  }
};
