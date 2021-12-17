import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  loading: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLoading: (state) => state.loading.length > 0,
  getLoading: (state) => state.loading,
}

export const mutations: MutationTree<RootState> = {
  SET_LOADING: (state, value: string) =>
    state.loading.includes(value)
      ? state.loading.filter((v) => v !== value)
      : state.loading.push(value),
}

export const actions: ActionTree<RootState, RootState> = {
  async setLoading({ commit }, value: string) {
    commit('SET_LOADING', value)
  },
}
