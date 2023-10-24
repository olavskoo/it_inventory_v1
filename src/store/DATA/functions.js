export const restoreSlice = () => {}


//////////////////////////////////////////////////////// LAPTOPS//////////////////////////////////////////////////////////////////////
export const setLaptops = (state, action) => ({...state, LAPTOPS:action.payload})
export const addLaptop = (state, action) => ({...state, LAPTOPS:[...state.LAPTOPS, action.payload]})
export const deleteLaptop = (state, action) => ({...state, LAPTOPS: state.LAPTOPS.filter(laptop=>laptop.id !== action.payload)})
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


//////////////////////////////////////////////////////// SCANNERS //////////////////////////////////////////////////////////////////////
export const setScanners = (state, action) => ({...state, SCANNERS:action.payload})
export const addScanner = (state, action) => ({...state, SCANNERS:[...state.SCANNERS, action.payload]})
export const deleteScanner = (state, action) => ({...state, SCANNERS: state.SCANNERS.filter(scanner=>scanner.id != action.payload)})
export const editScanner = (state, action) => {
  const {id, newUserName, newsso, newDepartment, newBrand, newModel, newSerialNumber, newSite} = action.payload
  console.log(state, action)
   const scannerToEdit = state.SCANNERS.findIndex(scanner=> scanner.id === id);
   if(scannerToEdit > -1 ){
     state.SCANNERS[scannerToEdit].UserName = newUserName;
     state.SCANNERS[scannerToEdit].sso = newsso;
     state.SCANNERS[scannerToEdit].Department = newDepartment;
     state.SCANNERS[scannerToEdit].Brand = newBrand;
     state.SCANNERS[scannerToEdit].Model = newModel;
     state.SCANNERS[scannerToEdit].SerialNumber = newSerialNumber;
     state.SCANNERS[scannerToEdit].Site = newSite;
   }
}
