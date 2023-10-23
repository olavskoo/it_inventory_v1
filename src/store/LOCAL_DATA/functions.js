export const SetTable = (state, action) => {

    state.TABLE = action.payload

}

export const SetItem = (state, action) => {
    state.ITEM = action.payload
}

export const SetShowModal = (state, action) => {
    state.SHOW_MODAL = action.payload
}