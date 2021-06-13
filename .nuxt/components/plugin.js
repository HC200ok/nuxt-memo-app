import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Categories: () => import('../../components/Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c)),
  Category: () => import('../../components/Category.vue' /* webpackChunkName: "components/category" */).then(c => wrapFunctional(c.default || c)),
  Login: () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c)),
  Memo: () => import('../../components/Memo.vue' /* webpackChunkName: "components/memo" */).then(c => wrapFunctional(c.default || c)),
  MemoEditor: () => import('../../components/MemoEditor.vue' /* webpackChunkName: "components/memo-editor" */).then(c => wrapFunctional(c.default || c)),
  Snackbar: () => import('../../components/Snackbar.vue' /* webpackChunkName: "components/snackbar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
