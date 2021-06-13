import { wrapFunctional } from './utils'

export { default as Categories } from '../../components/Categories.vue'
export { default as Category } from '../../components/Category.vue'
export { default as Login } from '../../components/Login.vue'
export { default as Memo } from '../../components/Memo.vue'
export { default as MemoEditor } from '../../components/MemoEditor.vue'
export { default as Snackbar } from '../../components/Snackbar.vue'

export const LazyCategories = import('../../components/Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c))
export const LazyCategory = import('../../components/Category.vue' /* webpackChunkName: "components/category" */).then(c => wrapFunctional(c.default || c))
export const LazyLogin = import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const LazyMemo = import('../../components/Memo.vue' /* webpackChunkName: "components/memo" */).then(c => wrapFunctional(c.default || c))
export const LazyMemoEditor = import('../../components/MemoEditor.vue' /* webpackChunkName: "components/memo-editor" */).then(c => wrapFunctional(c.default || c))
export const LazySnackbar = import('../../components/Snackbar.vue' /* webpackChunkName: "components/snackbar" */).then(c => wrapFunctional(c.default || c))
