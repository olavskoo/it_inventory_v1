export const SetTable = (state, action) => {
    state.TABLE = action.payload
}

export const SetItem = (state, action) => {
    state.ITEM = action.payload
}

export const SetShowModal = (state, action) => {
    state.SHOW_MODAL = action.payload
}

export const SetModal = (state, action) => {
    state.MODAL = action.payload
}

export const setLogInModal = (state, action) =>{
    state.LOGIN_MODAL = action.payload
}

export const setLogedUser = (state, action) =>{
    state.LOGED_USER = action.payload
}

export const setDeleteModal = (state, action) =>{
    state.DELETE_MODAL = action.payload
}

export const setRow = (state, action) =>{
    state.ROW = action.payload
}