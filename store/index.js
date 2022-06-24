export const state = () => ({
  darkMode: false,
  loading: true,
})

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode
  },

  toggleLoader(state) {
    state.loading = !state.loading
  }
}