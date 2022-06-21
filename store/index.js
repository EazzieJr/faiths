export const state = () => ({
  darkMode: false,
  loading: false,
})

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode
  },

  toggleLoader(state) {
    state.loading = !state.loading
  }
}