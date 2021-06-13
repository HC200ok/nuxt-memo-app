export const state = () => ({
  isLogin: false
});

export const mutations = {
  userLogin(state) {
    state.isLogin = true;
  }
};
