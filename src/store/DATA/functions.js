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
export const deleteScanner = (state, action) => ({...state, SCANNERS: state.SCANNERS.filter(scanner=>scanner.id !== action.payload)})
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

//////////////////////////////////////////////////////// PHONES //////////////////////////////////////////////////////////////////////
export const setPhones = (state, action) => ({...state, PHONES:action.payload})
export const addPhone = (state, action) => ({...state, PHONES:[...state.PHONES, action.payload]})
export const deletePhone = (state, action) => ({...state, PHONES: state.PHONES.filter(scanner=>scanner.id !== action.payload)})
export const editPhone = (state, action) => {
  const {id, newUserName, newsso, newDepartment, newBrand, newModel, newImei, newSite} = action.payload
  console.log(state, action)
   const phoneToEdit = state.PHONES.findIndex(phone=> phone.id === id);
   if(phoneToEdit > -1 ){
     state.PHONES[phoneToEdit].UserName = newUserName;
     state.PHONES[phoneToEdit].sso = newsso;
     state.PHONES[phoneToEdit].Department = newDepartment;
     state.PHONES[phoneToEdit].Brand = newBrand;
     state.PHONES[phoneToEdit].Model = newModel;
     state.PHONES[phoneToEdit].Imei = newImei;
     state.PHONES[phoneToEdit].Site = newSite;
   }
}

//////////////////////////////////////////////////////// PRINTERS //////////////////////////////////////////////////////////////////////
export const setPrinters = (state, action) => ({...state, PRINTERS:action.payload})
export const addPrinter = (state, action) => ({...state, PRINTERS:[...state.PRINTERS, action.payload]})
export const deletePrinter = (state, action) => ({...state, PRINTERS: state.PRINTERS.filter(scanner=>scanner.id !== action.payload)})
export const editPrinter = (state, action) => {
  const {id, newName, newAssetNumber, newSerialNumber, newBrand, newModel, newIp, newArea, newSite} = action.payload
  console.log(state, action)
   const printerToEdit = state.PRINTERS.findIndex(printer=> printer.id === id);
   if(printerToEdit > -1 ){
     state.PRINTERS[printerToEdit].Name = newName;
     state.PRINTERS[printerToEdit].AssetNumber = newAssetNumber;
     state.PRINTERS[printerToEdit].SerialNumber = newSerialNumber;
     state.PRINTERS[printerToEdit].Brand = newBrand;
     state.PRINTERS[printerToEdit].Model = newModel;
     state.PRINTERS[printerToEdit].Ip = newIp;
     state.PRINTERS[printerToEdit].Area = newArea;
     state.PRINTERS[printerToEdit].Site = newSite;
   }
}