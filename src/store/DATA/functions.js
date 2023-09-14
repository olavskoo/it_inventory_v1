export const restoreSlice = () => {}
// laptops
export const setLaptops = (state, action) => ({...state, LAPTOPS:action.payload})
export const addLaptop = (state, action) => ({...state, LAPTOPS:[action.payload,...state.LAPTOPS]})
export const deleteLaptop = (state, action) => ({...state, LAPTOPS: state.LAPTOPS.filter(laptop=>laptop.id !== action.payload)})
// TODO:TAREA
export const editLaptop = (state, action) => {
 const {id, newUserName, newsso, newDepartment, newBrand, newModel, newSerialNumber, newSite} = action.payload
console.log(state, action)
 const laptopToEdit = state.LAPTOPS.findIndex(laptop=> laptop.id === id);
 if(laptopToEdit > -1 ){
   state.LAPTOPS[laptopToEdit].UserName = newUserName;
   state.LAPTOPS[laptopToEdit].sso = newsso;
   state.LAPTOPS[laptopToEdit].Department = newDepartment;
   state.LAPTOPS[laptopToEdit].Brand = newBrand;
   state.LAPTOPS[laptopToEdit].Model = newModel;
   state.LAPTOPS[laptopToEdit].SerialNumber = newSerialNumber;
   state.LAPTOPS[laptopToEdit].Site = newSite;
 }
}

