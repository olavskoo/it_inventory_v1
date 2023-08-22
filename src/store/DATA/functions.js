export const restoreSlice = () => {}
// laptops
export const setLaptops = (state, action) => ({...state, LAPTOPS:action.payload})
export const addLaptop = (state, action) => ({...state, LAPTOPS:[action.payload,...state.LAPTOPS]})
export const deleteLaptop = (state, action) => ({...state, LAPTOPS: state.LAPTOPS.filter(laptop=>laptop.ID !== action.payload)})
// TODO:TAREA
export const editLaptop = (state, action) => {

    // checar si existe
    // traer del action.payload el ID del item a editar, y la de nueva data
    // setear ese preciso objeto  state.LAPTOPS[X].NAME = ''''
    // retornar el estado
}
