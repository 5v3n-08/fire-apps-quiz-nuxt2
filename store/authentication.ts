import { API } from './../helpers/api_routes'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  token: null as string | null,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isAuthenticated: (state) => state.token != null,
}

export const mutations: MutationTree<RootState> = {
  SIGN_IN: (state, value: string) => '',
}

export const actions: ActionTree<RootState, RootState> = {
  async requestSignIn({ commit, dispatch }, payload: IRequestSignIn) {
    dispatch('global/setLoading', REQUEST_SIGN_IN, { root: true })
    this.$axios
      // .$post(API.v1.authentication.login)
      .$get('/api/info')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() =>
        dispatch('global/setLoading', REQUEST_SIGN_IN, { root: true })
      )

    commit('SIGN_IN', 'value')
  },
}

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN'
export interface IRequestSignIn {
  email: string
  password: string
}
