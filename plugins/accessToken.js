import { setWithExpiry, getWithExpiry } from "~/assets/localstorage";

export default ({ app }, inject) => {
  // Inject $token in Vue
  const token = {
    set(token) {
      // 2 hours later expire
      setWithExpiry("access-token", token, 2 * 60 * 60 * 1000);
    },
    get() {
      return getWithExpiry("access-token");
    }
  };
  inject("token", token);
};
