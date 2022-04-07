export const state = () => ({
    items: null,

})

export const mutations = {
    SET_DATA(state, pd) {
        state.items = pd
    },
}