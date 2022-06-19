export const state = () => ({
  darkMode: false,
})

export const mutations = {
  setDarkMode(state) {
    state.darkMode = !state.darkMode
  }
}